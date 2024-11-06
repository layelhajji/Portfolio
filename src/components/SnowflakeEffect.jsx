// SnowflakeEffect.js
import { useEffect } from "react";
import { snowflakeCursor } from './snowflakeCursor';

function SnowflakeEffect() {
  useEffect(() => {
    const cursorEffect = new snowflakeCursor();

    return () => {
      // Supprime l'effet quand le composant est démonté
      cursorEffect.destroy();
    };
  }, []);

  return null; // Pas besoin de rendu pour ce composant
}

export default SnowflakeEffect;
    