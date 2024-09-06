function Alert(props) {
  return (
      props.alert && <div
        className={props.alert.type=="success"?"alert alert-success alert-dismissible fade show":"alert alert-danger alert-dismissible fade show"}
        role="alert"
      >
        <strong>{props.alert.message}</strong>
      </div>
  );
}

export default Alert;