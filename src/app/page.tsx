/*************  ✨ Windsurf Command 🌟  *************/
import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import FinalCTA from "@/components/FinalCTA";

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.25l-7.682-7.682a4.5 4.5 0 010-6.364z" />
  </svg>
);

const SleepIcon = () => (
  <Image
    src="/sleep.png"
    alt="Sleep Icon"
    width={24}
    height={24}
  />
);


const LongBattery = () => (
  <Image
  src="/battery.png"
  alt="Battery Icon"
  width={24}
  height={24}
  />
);



export default function SmartWatchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center">
        <img
        src="/hero.jpg"    
        alt="Gambar Smartwatch"
        width={300}
        height={300} 
        className="brightness-110 contrast-105 mx-auto mb-8 rounded-full"
        />
        <h1 className="text-5xl font-extrabold tracking-tight"> 
        The Future on Your Wrist
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-400">
           Experience seamless connectivity and track your health like never before.
          Elegance meets technology.
        </p>
        <button className= "mt-8 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
          Buy Now
        </button>
      </section>


{/* Fitur section */}
<section className="mt-20">
<h2 className = "text-3xl font-bold text-center mb-10" >
 Fitur Unggulan 
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <FeatureCard
    icon={<HeartIcon />}
    title="Heart Tracking"
    description="Monitor your heart rate, sleep patterns, and daily activity 24/7."
  />
  <FeatureCard
    icon={<SleepIcon />}
    title="Sleep Tracking"
    description="Pantau kualitas tidurmu setiap malam."
  />
  <FeatureCard
    icon={<LongBattery />}
    title="Long Battery"
    description="Baterai tahan hingga 10 hari pemakaian."
  />
</div>

</section>

{/* Testimonial Section */}
<section className="mt-24">
  <h2 className="text-3xl font-bold text-center mb-10 text-white">Apa Kata Mereka</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    <TestimonialCard
      name="Andi, Jakarta"
      content="Smartwatch ini benar-benar mengubah gaya hidup saya. Fitur kesehatannya sangat membantu!"
      avatarUrl="/testimonial1.jpg"
    />
    <TestimonialCard
      name="Budi, Bandung"
      content="Desainnya elegan dan baterainya tahan lama. Saya sangat puas dengan pembelian ini."
      avatarUrl="/testimonial1.jpg"
    />
  </div>
</section>

<FinalCTA
  heading="Ready to upgrade your wrist?"
  subheading="Bergabunglah dengan ribuan pengguna puas yang telah menggunakan smartwatch kami."
  buttonLabel="Order Now"
  
/>

    </div>  
  );
}