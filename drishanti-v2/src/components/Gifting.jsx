import React from "react"
import { Link } from "react-router-dom"
import {
  Shield,
  Heart,
  Gift,
  Baby,
  Users,
  PartyPopper,
} from "lucide-react"

const GiftingSection = () => {
  return (
    <section className="w-full bg-[#f8f4ee] overflow-hidden">

      {/* ================= HERO SECTION ================= */}

      <div className="grid grid-cols-1 xl:grid-cols-[0.85fr_1.1fr_0.65fr] gap-[2px] bg-[#e8ddd0] min-h-screen">

        {/* LEFT CONTENT */}
        <div className="bg-[#f8f4ee] px-8 xl:px-14 py-16 xl:py-20 flex flex-col justify-center">

          <p className="text-[10px] tracking-[0.45em] uppercase text-[#9f7440] font-semibold mb-6">
            Sacred Gifting
          </p>

          <h2 className="text-[48px] md:text-[60px] xl:text-[78px] leading-[0.95] font-serif text-[#8b5e2d] mb-10">
            Gifts for <br />
            Every Meaningful <br />
            Occasion
          </h2>

          <div className="flex items-center gap-4 mb-10">
            <div className="w-20 h-[1px] bg-[#b58a4b]" />
            <span className="text-[#b58a4b] text-xl">✦</span>
            <div className="w-20 h-[1px] bg-[#b58a4b]" />
          </div>

          <p className="text-[#5c5349] text-[22px] xl:text-[28px] leading-[1.7] max-w-md mb-12 font-light">
            More than a bracelet. <br />
            A symbol of love, protection <br />
            and positivity.
          </p>

          <Link
            to="/shop/gifting"
            className="inline-block border border-[#1a1a1a] px-8 py-4 text-[11px] tracking-[0.35em] uppercase font-semibold hover:bg-black hover:text-white transition-all duration-500 w-fit"
          >
            Explore Collection
          </Link>

        </div>


        {/* CENTER BIG IMAGE */}
        <div className="relative h-[500px] md:h-[700px] xl:h-auto overflow-hidden bg-[#efe7dc]">

          <img
            src="./images/gifting-main.jpg"
            alt="Meaningful gifting"
            className="w-full h-full object-cover"
            style={{
              filter: "contrast(1.05) saturate(1.03) brightness(0.99)"
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#00000008] via-transparent to-[#ffffff15]" />

        </div>


        {/* RIGHT IMAGES */}
        <div className="grid grid-rows-2 gap-[2px]">

          {/* TOP */}
          <div className="relative h-[300px] xl:h-auto overflow-hidden bg-[#efe7dc]">

            <img
              src="./images/gifting-box.jpg"
              alt="Gift box"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />

          </div>

          {/* BOTTOM */}
          <div className="relative h-[300px] xl:h-auto overflow-hidden bg-[#efe7dc]">

            <img
              src="./images/gifting-baby.jpg"
              alt="Baby blessing"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />

          </div>

        </div>

      </div>



      {/* ================= PERFECT FOR SECTION ================= */}

      <div className="bg-[#f8f4ee] py-14 border-t border-[#e5ddd2]">

        {/* TITLE */}
        <div className="flex items-center justify-center gap-5 mb-14 px-4">

          <div className="w-24 h-[1px] bg-[#b58a4b]" />

          <h3 className="text-3xl md:text-4xl font-serif text-[#8b5e2d] tracking-[0.15em] uppercase">
            Perfect For
          </h3>

          <div className="w-24 h-[1px] bg-[#b58a4b]" />

        </div>


        {/* OCCASIONS GRID */}
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-[1px] bg-[#ddd2c6]">

          {[
            {
              img: "./images/rakhi.jpg",
              icon: <Gift size={30} />,
              title: "Raksha\nBandhan",
            },
            {
              img: "./images/newborn.jpg",
              icon: <Baby size={30} />,
              title: "Newborn\nGifts",
            },
            {
              img: "./images/baby-blessing.jpg",
              icon: <Heart size={30} />,
              title: "Baby\nBlessings",
            },
            {
              img: "./images/couple.jpg",
              icon: <Users size={30} />,
              title: "Couple\nGifting",
            },
            {
              img: "./images/wedding.jpg",
              icon: <Gift size={30} />,
              title: "Weddings\n& Favors",
            },
            {
              img: "./images/festival.jpg",
              icon: <PartyPopper size={30} />,
              title: "Festivals",
            },
            {
              img: "./images/friendship.jpg",
              icon: <Heart size={30} />,
              title: "Friendship",
            },
            {
              img: "./images/protection.jpg",
              icon: <Shield size={30} />,
              title: "Everyday\nProtection",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#f8f4ee] group"
            >

              {/* IMAGE */}
              <div className="aspect-square overflow-hidden bg-[#efe7dc]">

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{
                    filter:
                      "contrast(1.03) saturate(1.02) brightness(1)"
                  }}
                />

              </div>

              {/* TEXT */}
              <div className="py-7 px-3 text-center">

                <div className="flex justify-center text-[#9f7440] mb-4">
                  {item.icon}
                </div>

                <p className="text-[12px] md:text-[14px] font-semibold tracking-[0.08em] uppercase text-[#7b5529] whitespace-pre-line">
                  {item.title}
                </p>

              </div>

            </div>
          ))}

        </div>


        {/* BOTTOM TEXT */}
        <div className="text-center pt-16">

          <p className="text-2xl md:text-3xl font-serif text-[#8b5e2d]">
            Thoughtful. Spiritual. Meaningful.
          </p>

          <p className="mt-4 text-lg text-[#8b6b47] font-serif">
            Gifts that stay in the heart, forever.
          </p>

        </div>

      </div>

    </section>
  )
}

export default GiftingSection