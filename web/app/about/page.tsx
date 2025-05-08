import { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | Memphis Capital",
  description: "Learn about Memphis Capital Kenya Limited - your strategic partner in business growth and financial solutions.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}