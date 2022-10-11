import styles from "./index.module.css";
// import { default as MuiSkeleton } from "@material-ui/lab/Skeleton";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";

const Skeleton = (): React.ReactElement => {
  return (
    <Card className={styles.root}>

    </Card>
  );
};

export default Skeleton;
