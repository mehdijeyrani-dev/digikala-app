import React, { type JSX } from "react";
import { useParams } from "react-router-dom";
import MobilePage from "../categories/MobilePage";
import LaptopPage from "../categories/LaptopPage";
import HomeAndKitchenPage from "../categories/HomeAndKitchenPage";
import HomeAppliancePage from "../categories/HomeAppliancePage";
import PersonalAppliancePage from "../categories/PersonalAppliancePage";
import ApparelPage from "../categories/ApparelPage";
import VehiclesSparePartsPage from "../categories/VehiclesSparePartsPage";
import VehiclesPage from "../categories/VehiclesPage";
import GoldPage from "../categories/GoldPage";
import ElectronicDevicesPage from "../categories/ElectronicDevicesPage";
import MedicalHealthEquipmentPage from "../categories/MedicalHealthEquipmentPage";
import BookAndMediaPage from "../categories/BookAndMediaPage";
import SportEntertainmentPage from "../categories/SportEntertainmentPage";
import GiftCardPage from "../categories/GiftCardPage";
import FoodBeveragePage from "../categories/FoodBeveragePage";
import MotherAndChildPage from "../categories/MotherAndChildPage";
import RuralProductsPage from "../categories/RuralProductsPage";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const categoryMap: Record<string, JSX.Element> = {
    mobile: <MobilePage />,
    laptop: <LaptopPage />,
    "electronic-devices": <ElectronicDevicesPage />,
    "medical-health-equipment": <MedicalHealthEquipmentPage />,
    "home-and-kitchen": <HomeAndKitchenPage />,
    "home-appliance": <HomeAppliancePage />,
    "personal-appliance": <PersonalAppliancePage />,
    apparel: <ApparelPage />,
    "vehicles-spare-parts": <VehiclesSparePartsPage />,
    vehicles: <VehiclesPage />,
    gold: <GoldPage />,
    "book-and-media": <BookAndMediaPage />,
    "sport-entertainment": <SportEntertainmentPage />,
    "gift-card": <GiftCardPage />,
    "food-beverage": <FoodBeveragePage />,
    "mother-and-child": <MotherAndChildPage />,
    "rural-products": <RuralProductsPage />,
  };

  return categoryMap[slug ?? ""] || <div>دسته‌بندی یافت نشد</div>;
};

export default CategoryPage;
