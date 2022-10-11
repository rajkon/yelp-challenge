import styles from "./index.module.css";
import Card from "@material-ui/core/Card";

export type BusinessCardProps = {
  Title: string;
  Year: string;
  businessID: string;
  Type: string;
  Category: string;
};

const BusinessCard = ({ Title, Year, businessID, Type, Category }: BusinessCardProps) => {


  return (
    <Card className={styles.root}>
      
        Hello
      
    </Card>
  );
};

export default BusinessCard;
