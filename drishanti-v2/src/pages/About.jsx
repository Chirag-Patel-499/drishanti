import React from "react";

const About = () => {
  return (
    <div className="bg-[#f8f4ee] text-[#2d2d2d] overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <span className="uppercase tracking-[5px] text-[13px] text-[#b69367] font-medium">
              About Us
            </span>

            <h1 className="text-[70px] leading-[1.1] mt-4 font-serif">
              Our Story
            </h1>

            <div className="w-24 h-[1px] bg-[#c9b08d] my-6"></div>

            <p className="text-[24px] leading-[1.9] text-[#353535] font-light">
              DRISHANTI is not just a jewellery brand.
              It is a conscious fine jewellery house built around meaning,
              memory, faith and emotional permanence.
            </p>

            <p className="mt-8 text-[#666] leading-[2.1] text-[17px]">
              At the heart of DRISHANTI lies one timeless idea —
              Rakshapotli. More than an ornament, it is a symbol of
              protection, awareness, discipline and inner intention.
              Traditionally worn on the right wrist in Jain culture,
              it carries deep emotional and spiritual significance.
            </p>

            <p className="mt-6 text-[#666] leading-[2.1] text-[17px]">
              What began as a simple conversation between founder
              Harshmi Sheth and her late father slowly transformed
              into a vision rooted in preservation, spirituality and purpose.
              Today, alongside co-founder Vinit Sheth,
              DRISHANTI continues to create meaningful keepsakes
              that blend luxury with consciousness.
            </p>

            <p className="mt-6 text-[#666] leading-[2.1] text-[17px]">
              Every Rakshapotli is handcrafted with devotion,
              encapsulating Vasakshep within its sacred core —
              transforming it from jewellery into a deeply personal
              power bracelet designed to carry peace, intention and protection.
            </p>

            {/* VALUES */}

            <div className="flex flex-wrap gap-8 mt-14">

              {[
                "Meaning",
                "Spirituality",
                "Consciousness",
                "Protection",
              ].map((item, i) => (
                <div key={i} className="text-center">

                  <div className="w-[65px] h-[65px] rounded-full border border-[#dbc4a6] flex items-center justify-center text-[#b89369] text-xl mb-3 mx-auto">
                    ✦
                  </div>

                  <p className="text-sm text-[#444]">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div>

            <img
              src="./images/about-couple.jpg"
              alt=""
              className="w-full h-[760px] object-cover rounded-[10px]"
            />

          </div>

        </div>

      </section>



      {/* ================= MEANING ================= */}

      <section className="bg-[#f2ece5] py-24 relative">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-[52px] font-serif">
            Meaning of Drishanti
          </h2>

          <p className="mt-6 text-[26px] text-[#7d6a52]">
            दृष्टि + शांति = Drishanti
          </p>

          <p className="mt-6 text-[#666] text-[18px] leading-[2] max-w-3xl mx-auto">
            A reminder to pause, breathe and reconnect with
            what truly protects us from within.
          </p>

        </div>

      </section>



      {/* ================= JOURNEY ================= */}

      <section className="py-24 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-16">

          {/* LEFT */}

          <div>

            <h3 className="text-[42px] font-serif mb-8">
              Why Rakshapotli?
            </h3>

            <p className="text-[#666] leading-[2] text-[17px]">
              It’s not just a thread. It’s a bond of protection,
              blessings and positive intention.
            </p>

            <p className="text-[#666] leading-[2] text-[17px] mt-5">
              Every Rakshapotli is handcrafted with prayers,
              love and sacred traditions.
            </p>

            <button className="mt-8 bg-[#b69367] text-white px-8 py-4 tracking-[2px] uppercase text-sm hover:bg-[#a27d52] transition">
              Explore Rakshapotli
            </button>

          </div>


          {/* RIGHT */}

          <div className="lg:col-span-2">

            <h3 className="text-[42px] font-serif mb-14">
              Our Journey
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

              {[
                {
                  year: "2006",
                  title: "The Thought",
                },
                {
                  year: "2010",
                  title: "Design Journey",
                },
                {
                  year: "2020",
                  title: "Brand Vision",
                },
                {
                  year: "2025",
                  title: "DRISHANTI",
                },
              ].map((item, i) => (

                <div key={i} className="text-center">

                  <div className="w-[70px] h-[70px] rounded-full border border-[#d8c3aa] flex items-center justify-center mx-auto text-[#b69367] text-2xl">
                    ✦
                  </div>

                  <h5 className="mt-6 text-[22px] font-serif">
                    {item.year}
                  </h5>

                  <p className="mt-2 text-[#666] leading-[1.8]">
                    {item.title}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>



      {/* ================= LITTLE GOOD ================= */}

      <section className="py-24 bg-[#f6f1ea]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-[55px] font-serif">
              Little Good Everyday
            </h2>

            <p className="mt-5 text-[#666] text-[18px]">
              Small acts of kindness make the world more beautiful.
            </p>

          </div>


          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">

            {[
              {
                title: "Feeding Cows",
                img: "./images/cow.jpg",
              },
              
              {
                title: "Tirth Darshan",
                img: "./images/temple.jpg",
              },
              {
                title: "Seva & Puja",
                img: "./images/seva.jpg",
              },
              {
                title: "Ayambil & Tap",
                img: "./images/food.jpg",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-white rounded-[18px] overflow-hidden shadow-sm hover:-translate-y-2 transition duration-500"
              >

                <img
                  src={item.img}
                  alt=""
                  className="w-full h-[240px] object-cover"
                />

                <div className="p-6 text-center">

                  <h4 className="font-serif text-[24px]">
                    {item.title}
                  </h4>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= SANCTITY ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-[52px] font-serif">
            Crafted With Sanctity
          </h2>

          <p className="mt-8 text-[#666] leading-[2.1] text-[18px] max-w-4xl mx-auto">
            Every DRISHANTI Rakshapotli carries Vasakshep
            carefully encapsulated within its sacred core.
            Crafted using premium German Ceramic enamel processing,
            each piece is designed for durability, beauty and meaningful everyday wear.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-[#f8f4ee] p-10 rounded-[20px]">
              <h4 className="font-serif text-[30px]">
                18kt Gold
              </h4>

              <p className="mt-4 text-[#666] leading-[1.9]">
                BIS Hallmarked with HUID certification.
              </p>
            </div>

            <div className="bg-[#f8f4ee] p-10 rounded-[20px]">
              <h4 className="font-serif text-[30px]">
                925 Silver
              </h4>

              <p className="mt-4 text-[#666] leading-[1.9]">
                Crafted in premium hallmarked silver.
              </p>
            </div>

            <div className="bg-[#f8f4ee] p-10 rounded-[20px]">
              <h4 className="font-serif text-[30px]">
                Certified Diamonds
              </h4>

              <p className="mt-4 text-[#666] leading-[1.9]">
                VVS EF certified diamond craftsmanship.
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* ================= OCCASIONS ================= */}

      <section className="py-24 bg-[#f6f1ea]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-[55px] font-serif">
              Moments To Cherish
            </h2>

            <p className="mt-5 text-[#666] text-[18px]">
              Meaningful gifting for every sacred moment.
            </p>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

            {[
              "Newborn Blessings",
              "Rakshabandhan",
              "Wedding Gifts",
              "Puja Return Gifts",
              "Tirth Yatra",
              "Spiritual Events",
              "Birthday Blessings",
              "Housewarming",
            ].map((item, i) => (

              <div
                key={i}
                className="bg-white p-8 rounded-[18px] text-center"
              >

                <div className="text-[#b69367] text-3xl mb-4">
                  ✦
                </div>

                <h4 className="font-serif text-[24px]">
                  {item}
                </h4>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= CRAFT ================= */}

      <section className="py-24 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-10 items-center">

          <div>

            <img
              src="./images/craft.jpg"
              alt=""
              className="w-full h-[500px] object-cover rounded-[10px]"
            />

          </div>

          <div>

            <h3 className="text-[42px] font-serif mb-8">
              Craftsmanship
            </h3>

            <p className="text-[#666] leading-[2]">
              Every piece is handcrafted with devotion,
              premium materials and meaningful detailing.
            </p>

            <ul className="mt-8 space-y-4 text-[#666]">

              <li>• Handcrafted with devotion</li>
              <li>• Premium quality materials</li>
              <li>• Spiritual process & blessings</li>
              <li>• Thoughtful packaging</li>

            </ul>

          </div>

          <div className="bg-white p-10 rounded-[20px] shadow-sm">

            <h3 className="text-[40px] font-serif mb-6">
              Founder’s Note
            </h3>

            <p className="text-[#666] leading-[2]">
              Our dream is simple —
              to create spiritual keepsakes
              that bring peace, protection
              and positivity into your life.
            </p>

            <h5 className="mt-10 font-serif text-[24px]">
              — Vinit & Harshmi
            </h5>

            <img
              src="/images/founder.jpg"
              alt=""
              className="w-full rounded-[15px] mt-8"
            />

          </div>

        </div>

      </section>



      {/* ================= FINAL PHILOSOPHY ================= */}

      <section className="py-28 text-center bg-[#efe7dc]">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-[60px] leading-[1.2] font-serif">
            Luxury With Depth. <br />
            Jewellery With Purpose.
          </h2>

          <p className="mt-10 text-[#666] leading-[2.1] text-[18px]">
            DRISHANTI was never created to sell grams.
            It was created to preserve meaning,
            protect peace and carry intention
            from one generation to the next.
          </p>

        </div>

      </section>



      {/* ================= FAQ ================= */}

      <section className="bg-[#f2ece5] py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-[52px] font-serif">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-6">

            {[
              "What makes Drishanti different?",
              "Are all Rakshapotlis handmade?",
              "Why spiritual gifting?",
              "How do I care for my Rakshapotli?",
            ].map((item, i) => (

              <div
                key={i}
                className="bg-white p-6 rounded-[15px] flex justify-between items-center"
              >

                <p className="text-[18px]">
                  {item}
                </p>

                <span className="text-2xl">
                  +
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;