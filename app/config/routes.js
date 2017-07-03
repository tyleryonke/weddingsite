// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
// var Child1 = require("../components/children/Child1");
// var Child2 = require("../components/children/Child2");
// var GrandChild1 = require("../components/children/grandchildren/GrandChild1");
// var GrandChild2 = require("../components/children/grandchildren/GrandChild2");

var OurWedding = require("../components/children/OurWedding");
var Details = require("../components/children/Details");
var Photos = require("../components/children/Photos");
var Registry = require("../components/children/Registry");
var GuestBook = require("../components/children/GuestBook");
var WeddingParty = require("../components/children/WeddingParty");
var Playlist = require("../components/children/Playlist");


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>

    <Route path="/" component={Main}>

      {/* If user selects OurWedding then show the appropriate component*/}
      <Route path="OurWedding" component={OurWedding} />
      {/* If user selects details then show the appropriate component*/}
      <Route path="Details" component={Details} />
       {/* If user selects Photos then show the appropriate component*/}
      <Route path="Photos" component={Photos} />
       {/* If user selects Registry then show the appropriate component*/}
      <Route path="Registry" component={Registry} />
       {/* If user selects GuestBook then show the appropriate component*/}
      <Route path="GuestBook" component={GuestBook} />
       {/* If user selects WeddingParty then show the appropriate component*/}
      <Route path="WeddingParty" component={WeddingParty} />
       {/* If user selects Playlist then show the appropriate component*/}
      <Route path="Playlist" component={Playlist} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={OurWedding} />

    </Route>
  </Router>
);