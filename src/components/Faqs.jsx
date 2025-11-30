import React from "react";
import bgVideo from "../elements/bg-video.mp4";
import faqsImg1 from "../elements/faqs1.jpg";
import faqsImg2 from "../elements/faqs2.jpg";

function Faqs() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-6">
        <div className="flex items-center justify-center gap-10">
          {/* LEFT IMAGE */}
          <img
            src={faqsImg2}
            alt="Bakeshop 1"
            className="hidden md:block w-56 h-56 md:w-64 md:h-100 object-cover rounded-xl shadow-2xl"
          />

          {/* FAQ BOX */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-10 md:p-12 shadow-2xl max-w-2xl text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-rose-500 text-center mb-6">
              FAQs
            </h1>

            {/* FAQ LIST */}
            <div className="text-gray-800 text-sm md:text-base leading-relaxed space-y-5">
              {/* 1 */}
              <div>
                <h2 className="font-semibold text-lg mb-1">
                  1. Do you bake fresh daily?
                </h2>
                <p>Yes! All our cakes are baked fresh every morning...</p>
              </div>

              {/* 2 */}
              <div>
                <h2 className="font-semibold text-lg mb-1">
                  2. Do you accept custom cake orders?
                </h2>
                <p>
                  Yes, custom cakes are accepted. Please order 2–3 days ahead.
                </p>
              </div>

              {/* 3 */}
              <div>
                <h2 className="font-semibold text-lg mb-1">
                  3. Do you offer delivery?
                </h2>
                <p>Yes, we deliver to nearby locations...</p>
              </div>

              {/* 4 */}
              <div>
                <h2 className="font-semibold text-lg mb-1">
                  4. What payment methods do you accept?
                </h2>
                <p>We accept GCash, bank transfer, and COD...</p>
              </div>

              {/* 5 */}
              <div>
                <h2 className="font-semibold text-lg mb-1">
                  5. Can I walk in?
                </h2>
                <p>Yes, but availability varies...</p>
              </div>

              {/* 6 */}
              <div>
                <h2 className="font-semibold text-lg mb-1">
                  6. Can I reschedule or cancel my order?
                </h2>
                <p>Yes, as long as the cake has not been prepared yet...</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src={faqsImg1}
            alt="Bakeshop"
            className="hidden md:block w-56 h-56 md:w-64 md:h-100 object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Faqs;
