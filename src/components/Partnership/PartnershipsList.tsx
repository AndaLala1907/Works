import React from "react";
import Image from "next/image";

const PartnershipsList = () => {
  return (
    <div className="partnerships-list">
      <div className="container d-flex flex-column ">
        <div className="card bg-white text-dark mb-5 p-4">
          <div className="card-body ">
            <div className="row d-flex align-items-center justify-content-between ">
              <div className="col-md-6 py-2">
                <Image
                  src={"/images/partners/Frame 2087327477.png"}
                  alt="Image"
                  height={300}
                  width={500}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 py-2">
                <Image
                  src={"/images/partners/Frame 2087327469.png"}
                  alt="Image"
                  height={300}
                  width={500}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="card-content py-2">
              <h3 className="card-title">
                Parntership with <span>Brainster</span>
              </h3>
              <p className="card-text">
                Our partnership with Brainster enables us to recruit and train
                the next generation of cybersecurity professionals. Together, we
                bring fresh ideas and cutting-edge solutions to the forefront of
                cyber defense. By combining Brainster’s forward-thinking
                education programs with our industry expertise, we are building
                a stronger, more resilient cybersecurity workforce. This
                collaboration ensures that our team stays ahead of emerging
                threats, equipped with the skills and knowledge to protect
                businesses and individuals in an ever-evolving digital
                landscape.
              </p>
            </div>
          </div>
        </div>

        <div className="card mb-5 ">
          <div className="card-body">
            <div className="row d-flex align-items-center justify-content-between gap-5">
              <div className="col-md-5">
                <Image
                  src={"/images/partners/Frame 2087327471.png"}
                  alt="Image"
                  height={400}
                  width={500}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <div className="card-content">
                  <h3 className="card-title">
                    Parntership with <span>Microsoft</span>
                  </h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur. Tristique dignissim
                    dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut
                    convallis ac neque tristique faucibus integer. Amet donec
                    maecenas vitae sollicitudin neque mauris etiam. Nibh dictum
                    id ut vestibulum mattis neque cursus. Tortor eleifend
                    egestas et lorem. Enim nisi non parturient malesuada sed.
                    Scelerisque massa amet ut diam amet aliquam pulvinar
                    aliquet. Lectus urna pellentesque eget lorem sed phasellus
                    eget diam. Fermentum orci interdum ornare libero velit at
                    pellentesque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mb-5 ">
          <div className="card-body">
            <div className="row d-flex align-items-center justify-content-between gap-5">
              <div className="col-md-6">
                <div className="card-content">
                  <h3 className="card-title">
                    Parntership with <span>Salesforce IQ</span>
                  </h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur. Tristique dignissim
                    dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut
                    convallis ac neque tristique faucibus integer. Amet donec
                    maecenas vitae sollicitudin neque mauris etiam. Nibh dictum
                    id ut vestibulum mattis neque cursus. Tortor eleifend
                    egestas et lorem. Enim nisi non parturient malesuada sed.
                    Scelerisque massa amet ut diam amet aliquam pulvinar
                    aliquet. Lectus urna pellentesque eget lorem sed phasellus
                    eget diam. Fermentum orci interdum ornare libero velit at
                    pellentesque.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <Image
                  src={"/images/partners/Frame 2087327476.png"}
                  alt="Image"
                  height={400}
                  width={500}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-white text-dark mb-5 p-4">
          <div className="card-body ">
            <div className="row d-flex align-items-center justify-content-between ">
              <div className="col-md-6 py-2">
                <Image
                  src={"/images/partners/Frame 2087327477.png"}
                  alt="Image"
                  height={300}
                  width={500}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 py-2">
                <Image
                  src={"/images/partners/Frame 2087327469 (1).png"}
                  alt="Image"
                  height={300}
                  width={500}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="card-content py-2">
              <h3 className="card-title">
                Parntership with <span>Azure</span>
              </h3>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur. Tristique dignissim
                dolor nunc sagittis pretium quam amet. Feugiat nisi eget ut
                convallis ac neque tristique faucibus integer. Amet donec
                maecenas vitae sollicitudin neque mauris etiam. Nibh dictum id
                ut vestibulum mattis neque cursus. Tortor eleifend egestas et
                lorem. Enim nisi non parturient malesuada sed. Scelerisque massa
                amet ut diam amet aliquam pulvinar aliquet. Lectus urna
                pellentesque eget lorem sed phasellus eget diam. Fermentum orci
                interdum ornare libero velit at pellentesque.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bottom-div-link w-25 mx-auto mb-5">
          <a href="#" type="button" className="bottomLink p-1">
            View All Partners
          </a>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsList;
