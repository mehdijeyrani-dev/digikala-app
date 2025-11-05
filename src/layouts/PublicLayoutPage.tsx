import React from "react";
import { Link, Outlet } from "react-router-dom";

const navLinks = [
  { label: "موبایل", to: "categories/mobile" },
  { label: "لپ تاپ", to: "categories/laptop" },
  { label: "کالای دیجیتال", to: "categories/electronic-devices" },
  { label: "خانه و آشپزخانه", to: "categories/home-and-kitchen" },
  { label: "لوازم خانگی و برقی", to: "categories/home-appliance" },
  { label: "آرایشی و بهداشتی", to: "categories/personal-appliance" },
  { label: "مد و پوشاک", to: "categories/apparel" },
  { label: "خودرو و موتور سیکلت", to: "categories/vehicles-spare-parts" },
  { label: "ابزار آلات و تجهیزات", to: "categories/vehicles" },
  { label: "طلا و نقره", to: "categories/gold" },
  { label: "تجهیزات پزشکی و سلامت", to: "categories/medical-health-equipment" },
  { label: "کتاب و هنر", to: "categories/book-and-media" },
  { label: "ورزش و سفر", to: "categories/sport-entertainment" },
  { label: "کارت هدیه", to: "categories/gift-card" },
  { label: "سوپر مارکت", to: "categories/food-beverage" },
  { label: "اسباب بازی کودک و نوزاد", to: "categories/mother-and-child" },
  { label: "محصولات بومی و محلی", to: "categories/rural-products" },
];

const PublicLayoutPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-2">
      <header className="w-full h-[108px] bg-neutral-400">
        <nav className="w-full grid grid-cols-6 gap-2">
          {navLinks.map((link) => (
            <Link className="bg-red-600 text-white min-w-48 flex-wrap" to={link.to} key={link.label}>
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <footer className="w-full h-[1180px] bg-neutral-400">Footer</footer>
    </div>
  );
};

export default PublicLayoutPage;
