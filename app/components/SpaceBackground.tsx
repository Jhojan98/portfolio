import ShootingStars from "./ShootingStars";

export default function SpaceBackground() {
  return (
    <>
      {/* Fondo espacial: nebulosa + estrellas + polvo + destellos + fugaces */}
      <div className="nebula" aria-hidden="true" />
      <div className="stars" aria-hidden="true" />
      <div className="stardust" aria-hidden="true" />
      <div className="sparkles" aria-hidden="true">
        <span className="sparkle" style={{ top: "13%", left: "6%", width: "21px", height: "21px", animationDelay: "0s" }} />
        <span className="sparkle" style={{ top: "37%", left: "33%", width: "13px", height: "13px", animationDelay: "1.2s" }} />
        <span className="sparkle" style={{ top: "9%", left: "58%", width: "16px", height: "16px", animationDelay: "2.1s" }} />
        <span className="sparkle" style={{ top: "61%", left: "4%", width: "14px", height: "14px", animationDelay: "0.6s" }} />
        <span className="sparkle" style={{ top: "74%", left: "27%", width: "11px", height: "11px", animationDelay: "3s" }} />
        <span className="sparkle" style={{ top: "44%", left: "51%", width: "19px", height: "19px", animationDelay: "1.8s" }} />
        <span className="sparkle" style={{ top: "24%", left: "84%", width: "12px", height: "12px", animationDelay: "2.6s" }} />
        <span className="sparkle" style={{ top: "82%", left: "63%", width: "15px", height: "15px", animationDelay: "0.9s" }} />
        <ShootingStars />
      </div>
    </>
  );
}
