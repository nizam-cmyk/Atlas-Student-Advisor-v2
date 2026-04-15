export function extractStudentId(text = '') {
  const normalized = String(text || '');
  const match = normalized.match(/\b\d{8,12}\b/);
  return match ? match[0] : null;
}

export function extractStudentThirdDigit(studentId = '') {
  const value = String(studentId || '').trim();
  return value.length >= 3 ? value.charAt(2) : null;
}