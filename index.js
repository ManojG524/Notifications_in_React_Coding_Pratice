const Notification = (props) => {
  //  Write your code here.
  const { className, url, name } = props;
  return (
    <li className={className}>
      <img src={url} alt="image" />
      <p>{name}</p>
    </li>
  );
};

const element = (
  //  Write your code here.
  <div className="Container">
    <h1 className="heading">Notifications</h1>
    <ul className="ul">
      <Notification
        className="blue"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        name="Information Message"
      />
      <Notification
        className="green"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        name="Success Message"
      />
      <Notification
        className="orange"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        name="Warning Message"
      />
      <Notification
        className="red"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        name="Error Message"
      />
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
