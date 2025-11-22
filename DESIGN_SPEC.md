# **SITE DESIGN SPEC — MATERIAL MINIMALISM (FULL SYSTEM)**

نسخه‌ای که هیچ‌کس بعدش غلط‌گیر نمی‌خواد.

---

# 0. **Foundations**

## 0.1 Typography

* Font: **Vazirmatn** (weight 300 / 400 / 500 / 700)
* 숫자: همیشه **EN digits**
  * → `font-feature-settings: "lnum", "tnum";`
  * → یا با js: تبدیل اعداد فارسی به انگلیسی
* Base size: 15px
* Line-height: 1.6
* Heading scale:
  * H1: 30px
  * H2: 24px
  * H3: 18px

## 0.2 Color System

Material-inspired، بدون شوآف کاری، با سکوت و نجابت.

* **Primary:** #6200EE
* **Primary Variant:** #7E3FF2
* **Secondary:** #03DAC5
* **Surface:** #FFFFFF
* **Background:** #F6F7F9
* **Outline / Border:** #E4E7EB
* **Text Primary:** #1A1A1A
* **Text Secondary:** #555

## 0.3 Spacing Scale

* 4 / 8 / 12 / 16 / 20 / 24 / 32 px
  تمام کامپوننت‌ها فقط از این مقیاس استفاده می‌کنند.

## 0.4 Radius

* Card: 12px
* Input: 10px
* Button: 10px
* All consistent.

## 0.5 Shadow

* Idle: `0 3px 6px rgba(0,0,0,0.08)`
* Hover: `0 6px 12px rgba(0,0,0,0.12)`

---

# 1. **HEADER SPEC**

حذف تزئینات، تمرکز روی شفافیت.

## 1.1 Layout

* ارتفاع: 64px
* پس‌زمینه: Surface سفید
* Position: sticky، top:0
* Shadow very subtle: `0 1px 2px rgba(0,0,0,0.06)`
* Padding: 0 24px
* Display: flex، justify-between، align-center

## 1.2 عناصر

* سمت راست: لوگوی تایپ شده ساده
  * وزن 700
  * اندازه 20px
  * رنگ #1A1A1A
* وسط: فضا خالی
* سمت چپ: دکمه "ورود / ثبت‌نام" یا پروفایل
  * دکمه Outline style
  * Border: 1px solid #E4E7EB
  * Hover: background #F2F3F7

---

# 2. **HERO SECTION SPEC**

## 2.1 Layout

* ارتفاع: 360px
* پس‌زمینه: رنگ Primary روشن‌شده تا 20 درصد
* محتوا وسط‌چین
* فاصله داخلی: 32px
* تایپوگرافی:
  * Title: 32px، Bold
  * Subtitle: 16px، Secondary text

## 2.2 Wave Divider (زیر هدر)

* موج **نامنظم، طبیعی، نیمه‌شلخته**
* Fill = رنگ hero → به surface
* بدون گرادیانت
* ارتفاع موج: 100–140px
* مسیر SVG طبق همین خط:

  ```
  M0,90 
  C180,40 260,120 420,70
  C620,10 760,140 940,60
  C1120,0 1280,110 1440,50
  L1440,120 L0,120 Z
  ```

* preserveAspectRatio="none"
* موج کاملا minimal، بدون سایه، بدون stroke

---

# 3. **PRODUCTS GRID SPEC**

## 3.1 Grid

* 3 ستون دسکتاپ
* 2 ستون تبلت
* 1 ستون موبایل
* فاصله بین کارت‌ها: 20px
* Container padding: 24px

---

# 4. **PRODUCT CARD SPEC (FINAL VERSION)**

نسخه‌ای که خودم هم حسرتش را می‌خورم.

این *دستور مطلق* برای Cursor است.

## 4.1 General

* عرض: 280px
* ارتفاع: 360px
* Border-radius: 12px
* پس‌زمینه: Surface سفید
* Shadow سطحی
* Transition: 300ms
* Display: flip-card inside wrapper
* Wrapper:

  ```
  perspective: 1000px;
  ```

## 4.2 Flip Behavior

ساختار قطعی:

```
<div class="card-wrapper">
  <div class="card">
    <div class="card-front"></div>
    <div class="card-back"></div>
  </div>
</div>
```

* `.card`:

  ```
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.3s ease-in-out;
  ```

* `.card.flipped`:

  ```
  transform: rotateY(180deg);
  ```

## 4.3 FRONT SIDE

نمای ساده و بی‌حرف.

### Elements:

1. **Image**
   * ارتفاع: 220px
   * عرض: 100%
   * object-fit: cover
   * گوشه‌های بالا: 12px

2. **Price**
   * رنگ: Primary
   * وزن: 500
   * اندازه: 16px
   * EN digits فقط

3. **Stars count**
   * آیکون 18px
   * متن 14px سبک

### Layout:

```
<div class="flex flex-col">
  <img ... />
  <div class="px-4 py-2">
    <div class="text-primary font-medium">120,000 تومان</div>
    <div class="flex items-center gap-2 text-sm text-gray-600">
      ⭐ 500 Stars
    </div>
  </div>
</div>
```

* NO description
* NO button
* NO shadow داخل تصویر
* فقط اطلاعات خام.

## 4.4 BACK SIDE

فقط برای توضیح + دکمه خرید.

### Layout:

* padding: 16px
* direction: rtl
* text-align: right
* transform: rotateY(180deg)
* backface-visibility: hidden

### Elements:

1. **Title**
   * 18px Bold
   * margin-bottom: 8px

2. **Description**
   * 14px regular
   * رنگ: Text Secondary
   * حداکثر سه خط
   * بدون اسکرول

3. **Buy Button**
   * عرض: 100%
   * ارتفاع: 44px
   * رنگ: Primary
   * رنگ متن: سفید
   * radius: 10px
   * وزن متن: Medium
   * بدون سایه
   * Hover:

     ```
     background: #7E3FF2;
     ```

---

# 5. **BUTTONS (GLOBAL)**

## Primary

* پس‌زمینه: #6200EE
* متن: سفید
* radius: 10px
* padding: 12px 18px
* font-weight: 500

## Secondary (Outline)

* Border: 1px solid #E4E7EB
* رنگ متن: #1A1A1A
* Hover: #F3F4F6

---

# 6. **INPUTS**

* ارتفاع: 44px
* padding: 0 12px
* border: 1px solid #E4E7EB
* radius: 10px
* Focus:
  * border-color: #6200EE
  * shadow: none
* Placeholder: #999

---

# 7. **FOOTER**

* پس‌زمینه: سفید
* padding: 24px
* متن 13px
* رنگ Secondary text
* هیچ عنصر اضافی مجاز نیست

---

# 8. **ANIMATION RULES (GLOBAL)**

* Transition همه اجزا: 200ms–300ms
* فقط opacity، transform، background-color
* هیچ bounce، fade fancy، spring انیمیشن وجود ندارد
* Flip کارت تنها انیمیشن سه‌بعدی سایت است

---

# 9. **CONSTRAINTS (مهم)**

Cursor باید این‌ها را رعایت کند:

* هیچ عنصر UI بدون دستور من **وجود خارجی ندارد**
* هیچ رنگ خارج از پالت مجاز نیست
* هیچ spacing غیر از scale تعریف‌شده مجاز نیست
* هیچ border-radius جدید ممنوع
* هیچ افکت شلوغ یا گرادیانت بدردنخور ممنوع
* Flip فقط Y rotation
* کارت فقط یک دکمه دارد: Buy

---

**این SPEC نهایی است. هر کامپوننتی که ساخته می‌شود باید 100% مطابق این سند باشد.**

