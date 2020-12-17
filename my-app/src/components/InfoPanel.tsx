import InfoArticle from "./InfoArticle";
import * as React from "react";
import {Grid} from "@material-ui/core";


interface IFeedItem {
    name: string;
    message: string;
    date: string;
}

interface IInfoPanel {
    data: Array<IFeedItem>
}

const InfoPanel = (props: IInfoPanel): JSX.Element => {

    const FeedItems = props.data && props.data.map(data => <InfoArticle data={data} /> )

    return  <Grid>
        {FeedItems}
    </Grid>
}

export default InfoPanel;