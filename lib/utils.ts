// Convert Persian digits to English (EN digits as per SPEC)
const persianToEnglish = (str: string): string => {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  let result = str;
  persianDigits.forEach((persian, index) => {
    result = result.replace(new RegExp(persian, 'g'), englishDigits[index]);
  });
  return result;
};

export function formatNumber(num: number): string {
  // Format with English digits (en-US locale)
  return num.toLocaleString('en-US');
}

export function formatPrice(price: number): string {
  return `${formatNumber(price)} تومان`;
}

export function toEnglishDigits(str: string): string {
  return persianToEnglish(str);
}

