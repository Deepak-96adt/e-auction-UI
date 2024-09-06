import "./TeamMembers.css";

function TeamMembers() {
    return (
        <>
 {/* <!-- Team Start --> */}
 <div className="container-fluid bg-light overflow-hidden px-lg-0">
    <div className="container-xxl py-5">
        <div className="container">
            <div className="section-title text-center">
                <h1 className="display-5 mb-5">Team Members</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <div className="overflow-hidden position-relative">
                            <img className="img-fluid" src="img/team-1.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-square" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center border border-5 border-light border-top-0 p-4">
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="overflow-hidden position-relative">
                            <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-square" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center border border-5 border-light border-top-0 p-4">
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                        <div className="overflow-hidden position-relative">
                            <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-square" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center border border-5 border-light border-top-0 p-4">
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item">
                        <div className="overflow-hidden position-relative">
                            <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                            <div className="team-social">
                                <a className="btn btn-square" href="/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href="/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href="/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="text-center border border-5 border-light border-top-0 p-4">
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    {/* <!-- Team End --> */}
        </>
    );
}

export default TeamMembers;