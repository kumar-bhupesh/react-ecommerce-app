import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import ProductsSection from "../../components/productsSection/ProductsSection";
import ServiceHighlights from "../../components/serviceHighlights/ServiceHighlights";
import { productsData } from "../../data/productsData";

const HomePage = () => {
  return (
    <Layout>
      <HeroSlider />
      <ProductsSection
        title="Best Selling Products"
        bgColor="#fff"
        products={productsData.slice(0, 12)}
      />
      <ProductsSection
        title="Top Rated Products"
        bgColor="#F7FAFD"
        products={productsData.slice(12, 24)}
      />
      <ServiceHighlights />
    </Layout>
  );
};

export default HomePage;
