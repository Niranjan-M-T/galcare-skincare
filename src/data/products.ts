export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  bgImage: string;
  bgColor: string;
  ratings: number;
  reviews: number;
  price: number;
  sizes: string[];
  details: {
    title: string;
    content: string;
  }[];
  benefits: {
    title: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  activeCompounds: {
    title: string;
    description: string;
    compounds: {
      name: string;
      description: string;
      image: string;
    }[];
  };
  regimen: {
    title: string;
    image: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "nuvate-al-gel",
    name: "Nuvate AL Gel",
    category: "Dermatology",
    tagline: "Advanced topical formulations and clinical skin care protocols designed for profound aesthetic restoration.",
    image: "/images/product-1.png",
    bgImage: "/dermatology_bg.png",
    bgColor: "bg-blue-50/50",
    ratings: 5,
    reviews: 120,
    price: 45,
    sizes: ["50 g", "100 g"],
    details: [
      {
        title: "Skin types",
        content: "Formulated for all skin types, including sensitive and post-procedure skin. Non-comedogenic and hypoallergenic."
      },
      {
        title: "How to use",
        content: "Apply a thin layer to the affected area twice daily, or as directed by your dermatologist. Gently massage until fully absorbed."
      },
      {
        title: "Ingredients",
        content: "Purified Water, Glycerin, Niacinamide, Hyaluronic Acid, Centella Asiatica Extract, Ceramides, Dimethicone, Phenoxyethanol."
      }
    ],
    benefits: {
      title: "Weightless Hydration",
      items: [
        {
          title: "+90% Instant hydration boost",
          description: "Clinical testing on 19 women, conducted immediately after product application.",
          icon: "M13 10V3L4 14h7v7l9-11h-7z"
        },
        {
          title: "Immediate absorb",
          description: "Ultra-fine droplets quickly absorb on contact, providing maximum effectiveness.",
          icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        }
      ]
    },
    activeCompounds: {
      title: "Active Compounds",
      description: "Harnessing the power of precision-engineered active molecules.",
      compounds: [
        {
          name: "Plant-derived hyaluronic acid",
          description: "Holds many times its water weight to restore skin's plumped, hydrated look.",
          image: "/images/product-2.png" // Placeholder for compound image
        },
        {
          name: "Snow mushroom extract",
          description: "Used for its hydrating and anti-aging properties. Retains moisture and supports skin barrier.",
          image: "/images/product-1.png" // Placeholder for compound image
        }
      ]
    },
    regimen: {
      title: "5 steps hydration regimen",
      image: "/images/patient_dermatology.png", // Reusing the derma image
      steps: [
        {
          title: "Cleansing",
          description: "Gently rinse away dirt and impurities with an ultra-gentle face cleanser."
        },
        {
          title: "Hydration",
          description: "Apply a thin layer of gel to lock in moisture and prep the skin."
        },
        {
          title: "Restore Resilience",
          description: "Massage gently until fully absorbed to repair the skin barrier."
        },
        {
          title: "Boost Hydration",
          description: "Follow up with a secondary layer on particularly dry patches."
        },
        {
          title: "Soothing",
          description: "Allow the formulation to settle and soothe inflamed skin areas overnight."
        }
      ]
    }
  },
  {
    id: "p2",
    slug: "clinical-serum",
    name: "Clinical Renewal Serum",
    category: "Dermatology",
    tagline: "Pioneering molecular support systems for comprehensive cellular rejuvenation.",
    image: "/images/product-2.png",
    bgImage: "/neuro_bg.png",
    bgColor: "bg-gray-50",
    ratings: 4.8,
    reviews: 85,
    price: 38,
    sizes: ["30 ml", "60 ml"],
    details: [
      {
        title: "Skin types",
        content: "Ideal for dry, compromised, or mature skin in need of intensive barrier repair."
      },
      {
        title: "How to use",
        content: "Dispense a small amount onto fingertips and gently press into cleansed skin. Use morning and night."
      },
      {
        title: "Ingredients",
        content: "Aqua, Squalane, Shea Butter, Peptides, Vitamin E, Panthenol, Caprylic/Capric Triglyceride."
      }
    ],
    benefits: {
      title: "Cellular Rejuvenation",
      items: [
        {
          title: "Visible Wrinkle Reduction",
          description: "Significantly reduces the appearance of fine lines and wrinkles in 4 weeks.",
          icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        },
        {
          title: "Enhanced Elasticity",
          description: "Improves skin bounce and structural integrity through advanced peptide complexes.",
          icon: "M13 10V3L4 14h7v7l9-11h-7z"
        }
      ]
    },
    activeCompounds: {
      title: "Potent Actives",
      description: "Advanced peptide complexes and botanical extracts for maximum efficacy.",
      compounds: [
        {
          name: "Retinol Alternative",
          description: "Provides all the anti-aging benefits of retinol without the irritation.",
          image: "/images/product-1.png"
        },
        {
          name: "Niacinamide (10%)",
          description: "Visibly minimizes enlarged pores, tightens lax pores, improves uneven skin tone.",
          image: "/images/product-1.png"
        }
      ]
    },
    regimen: {
      title: "Nightly Renewal Process",
      image: "/images/patient_dermatology.png",
      steps: [
        {
          title: "Preparation",
          description: "Start with a perfectly cleansed and toned face."
        },
        {
          title: "Application",
          description: "Apply 2-3 drops of serum onto fingertips."
        },
        {
          title: "Distribution",
          description: "Gently press and massage into the skin using upward strokes."
        },
        {
          title: "Targeting",
          description: "Pay special attention to areas with visible aging signs."
        },
        {
          title: "Sealing",
          description: "Seal in the serum with a rich nighttime moisturizer."
        }
      ]
    }
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
