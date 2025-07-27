interface FinalCTAProps {
  heading: string;
  subheading: string;
  buttonLabel: string;
}

export default function FinalCTA({ heading, subheading, buttonLabel,  }: FinalCTAProps) {
  return (
    <section className="mt-32 text-center bg-blue-600 text-white py-16 px-4 rounded-2xl max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-4">{heading}</h2>
      <p className="text-lg mb-8">{subheading}</p>
      <button
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
      >
        {buttonLabel}
      </button>
    </section>
  );
}
