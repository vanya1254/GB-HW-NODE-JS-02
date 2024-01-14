# Библиотека для генерации паролей, которая позволяет генерировать случайные и безопасные пароли.

choice() -> принимает индексируем объект и возвращает его случайный элемент.

genPasswords ({
countChars: number,
countPasswords: number,
digits: boolean,
uppercase: boolean,
lowercase: boolean,
punctuation: boolean,
}) => string[];
