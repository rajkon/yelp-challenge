import { useState,useRef, useEffect, ReactElement } from "react";
import styles from "./index.module.css";
import service from "utils/service";
import CONSTANTS from "utils/constants";
// import { useInfiniteQuery } from "react-query";
// import BusinessCard, { BusinessCardProps } from "components/BusinessCard";
import Skeleton from "components/BusinessCard/Skeleton";
import { Grid } from "@material-ui/core";
// import InfiniteScroll from "react-infinite-scroll-component";
import Divider from '@material-ui/core/Divider';

const Home = (): ReactElement => {
  const businessList = useRef({});
  const [review, setReview] = useState('');

  const [searchText, setSearchText] = useState("ice cream"); // Initial value set to 'man' to display default search results on UI
  const [currentPage, setCurrentPage] = useState(0);



  const handleSearchChange = (e: any) => {
    console.log('event occured',e.target.value)
    setSearchText(e.target.value);
  };

/*   const fetchBusinesses = ({ pageParam = 1 }) =>
    service.get(CONSTANTS.BASE_URL, {
      term: searchText,
      location: "Alpharetta"
    }); */

  useEffect( ()=> {
      console.log('chaning search');
      service.getSearchRes('',searchText).then((resp)=>
      businessList.current = resp);
      console.log('businessList', businessList.current);
      service.getReview('',{}).then((reviewResp)=>{
        console.log({reviewResp});
        setReview(reviewResp)});
  },[searchText]);



  /*

    useEffect(() => {
    setCurrentPage(0);
    console.log('in search mode');
    remove();
    setTimeout(() => {
      refetch();
    }, 1000);
  }, [searchText]); // eslint-disable-line react-hooks/exhaustive-deps

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    isLoading,
    refetch,
    remove,
  } = useInfiniteQuery(`busineses`, fetchBusinesses, {
    getNextPageParam: (lastPage, _) => {
      return +lastPage.totalResults > currentPage * 10 ? currentPage + 1 : null;
    },
    enabled: !!searchText.length,
    onSuccess: () => {
      setCurrentPage(currentPage + 1);
    },
  }); */

/*   const BusinessListLoader = (itemCount: number): ReactElement => {
    return (
      <Grid container spacing={2}>
        {[...new Array(itemCount)].map((_, i: number) => (
          <Grid item xs={12} md={3} key={i}>
            <Skeleton />
          </Grid>
        ))}
      </Grid>
    );
  }; */
 console.log('render');
  return (
    <div className={styles.root}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10}>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={4}>
              <input
                name="searchText"
                onChange={handleSearchChange}
                defaultValue={searchText} 
              />
            </Grid>
          </Grid>

          <Grid item xs={12} className={styles.businessListContainer}>
            <h1>BUSINESS Details</h1>
            {JSON.stringify(businessList.current)}
            <Divider variant="middle"/>
            <h1>Review</h1>
            {JSON.stringify(review)}
            {/* 
            {isLoading && BusinessListLoader(8)}
            {}
            
            {isSuccess &&
              (!!data ? (
                <InfiniteScroll
                  dataLength={
                    data.pages.reduce((a, b) => {
                      return { Search: [...a.Search, ...b.Search] };
                    }).Search.length
                  }
                  next={fetchNextPage}
                  hasMore={hasNextPage || false}
                  loader={MoviesLoader(4)}
                  style={{ overflow: "hidden" }}
                >
                  <Grid container spacing={2}>
                    "SOMETHING"
                    {JSON.stringify(data)}
                    {data.pages
                      .reduce((a, b) => {
                        return { Search: [...a.Search, ...b.Search] };
                      })
                      .Search.map(
                        ({
                          Title,
                          businessID,
                          Type,
                          Year,
                          Category,
                        }: BusinessCardProps) => (
                          <Grid item xs={12} md={3} key={businessID}>
                            <BusinessCard
                              {...{ Title, businessID, Type, Year, Category }}
                            />
                          </Grid>
                        )
                      )}
                  </Grid>
                </InfiniteScroll>
              ) : (
                "No Result"s
              ))}

             
            {!!error && (
              <div className={styles.errorMessageContainer}>
                {JSON.stringify(error)}
              </div>
            )}
            */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
