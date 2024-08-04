//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();
  if (!message) return "Fine. Be that way!";

  const isQuestion = message.endsWith("?");
  const isUppercase =
    message === message.toUpperCase() && message !== message.toLowerCase();

  if (isQuestion) {
    if (isUppercase) return "Calm down, I know what I'm doing!";
    return "Sure.";
  }
  if (isUppercase) return "Whoa, chill out!";
  return "Whatever.";
};
