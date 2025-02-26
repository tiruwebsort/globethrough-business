import { FeatureCardProps } from "../types";
const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  description,
  title,
}) => {
  return (
    <article className="flex  flex-col h-full items-start max-md:mt-6">
      <img
        loading="lazy"
        src={iconSrc}
        className="object-contain aspect-square w-[71px]"
        alt=""
      />
      <h3 className="mt-6 max-[768px]:mt-3  text-2xl font-bold text-stone-900">
        {title}
      </h3>
      <p className="self-stretch mt-5 text-base leading-6 text-stone-500">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
