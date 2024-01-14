function choice(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

const genPasswords = (
  userChars = {
    countChars: 12,
    countPasswords: 1,
    digits: true,
    uppercase: true,
    lowercase: true,
    punctuation: true,
  }
) => {
  const allChars = {
    digits: "0123456789",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    punctuation: "!#$%&*+-=?@^_",
  };

  let needChars = "";

  if (userChars.digits) {
    needChars += allChars.digits;
  }
  if (userChars.uppercase) {
    needChars += allChars.uppercase;
  }
  if (userChars.lowercase) {
    needChars += allChars.lowercase;
  }
  if (userChars.punctuation) {
    needChars += allChars.punctuation;
  }

  const passwords = [];

  for (let i = 0; i < userChars.countPasswords; i++) {
    let password = "";
    for (let j = 0; j < userChars.countChars; j++) {
      password += choice(needChars);
    }
    passwords.push(password);
  }

  return passwords;
};

(modules.exports = choice), genPasswords;
