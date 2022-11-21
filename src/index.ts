export function isValidEmail(email: string): boolean {
  const twoDotsRegex = /\.{2,}/g;

  if (email.match(twoDotsRegex)) {
    return false;
  }

  const domainRegex = /([\da-z.-]+)(\.)((?!.*\.$)[a-z.]{2,6})/g;

  const localPartRegex = /.+(?=@)/;

  const domainPart = email.replace(localPartRegex, '');

  if (!domainPart.match(domainRegex)) {
    return false;
  }

  const localPartMatch = email.match(localPartRegex);

  if (!localPartMatch) {
    return false;
  }

  const localPart = localPartMatch[0];

  const dotsOnEdgesRegex = /^[.]|[.]$/g;

  if (localPart.match(dotsOnEdgesRegex)) {
    return false;
  }

  const quotedParts = email.match(/".+?"/g);
  const quotedRegEx = /^"[A-Za-z0-9+\-!#$%&'*/=?^_`{|}~(),:;<>@[\]\\ ]+"$/g;

  if (quotedParts && !quotedParts.every(item => item.match(quotedRegEx)?.length)) {
    return false;
  }

  const quotedElementsRegEx = /"[A-Za-z0-9+\-!#$%&'*/=?^_`{|}~(),:;<>@[\]\\ ]+"/g;

  const unquotedPart = quotedParts ? localPart.replaceAll(quotedElementsRegEx, '') : localPart;

  if (unquotedPart === '') {
    return true;
  }

  const unquotedPartMatch =
    unquotedPart &&
    unquotedPart.match(
      /^[A-Za-z0-9+\-!#$%&'*/=?^_`{|}~.]+|[A-Za-z0-9+\-!#$%&'*/=?^_`{|}~.]+|(?:[\\][A-Za-z0-9+\-!#$%&'*/=?^_`{|}~.(),:;<>@[\]\\ "])+|^(?:[\\][A-Za-z0-9+\-!#$%&'*/=?^_`{|}~.(),:;<>@[\]\\ "])+/g
    );

  if (
    unquotedPartMatch === null ||
    (unquotedPartMatch as string[])?.reduce((acc, item) => acc.replace(item, ''), unquotedPart)
      .length
  ) {
    return false;
  }

  return true;
}
