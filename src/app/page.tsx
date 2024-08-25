import LeftSection from "@/app/components/LeftSection";
import RightSection from "@/app/components/RightSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainpage}>
      <div className={styles.leftOut}>
        <LeftSection />
      </div>
      <div className={styles.rightOut}>
        <RightSection />
      </div>
    </div>
  );
}