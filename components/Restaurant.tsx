import { storyblokEditable } from "@storyblok/react/rsc";

const Restaurant = ({ blok }: any) => (
  <main {...storyblokEditable(blok)}>
    <div>
      <div
        className={`min-h-[500px] relative
          flex
          items-end
          justify-center
          p-9
          my-6
          rounded-[5px]
          overflow-hidden`}
      >
        <div className="relative z-10 text-center">
          <h1 className="text-7xl text-white font-bold mb-3">{blok.name}</h1>
        </div>
        <img
          src={`${blok.background_image?.filename}`}
          // alt={blok.background_image.alt}
          className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </main>
);
export default Restaurant;
