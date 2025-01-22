 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RatingSection = () => {
    const ratingCard = [
        {
          id: 1,
          review:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
          name: "John Doe",
          rating: 5,
          image:
            "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOF-kwz6q7b6MILz8~zzH6kb0htM~dlnYSlBy-bWEtUqdRM66Tlyx-Im8GIp5zFkgkwFNXUmuzaXEIov6Nh1hTB652pnU9JheTm2m4n51eMLEW9-JKQJmtw9hf6~-v33r~2ivSROsJ7OSAEtZvBpPXbk8pbMPPXxdAbTMxJDha0gbctqB7hcsQsgWlc8KD25sa1WTD63w5O5is5B67B3W9E7GMBmmehqVo01mjEjKKsT~ba-mwGTQoW~DbcjzZzoNWK3Ii~3bJ82avjyoqgQpYSeJ1MWIi4melW1uUBcx9H7eI~k3PyXE6xGwxIZI~glaSYv8Cx6hQrjP6Vj3nr4mA__",
          address: "President and CEO , PrintReach , USA",
        },
        {
          id: 2,
          review:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
          name: "John Doe",
          rating: 5,
          image:
            "https://s3-alpha-sig.figma.com/img/a2ed/e07c/11849dd0ba0598512e6e3cb72bc7dabb?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YogyFFvnuTp0R1IGpQPR~4X3jShxxb6vU9FN2wcb2f-rWdK3Qdw0VblxMPW7XNFUxLNQEEfZCKZv1q2p-e8Wuyv3l-yj27a2Uow06Zi0sx7gK~13yHO0bZOE~9Usg1DTxOxq-w-ay9TZWJPQCtXUEPyhJ9w1gqs37UZKRrryeAnwbV3yhmH7o4rs6Y1LD52rpUXzCiBGLFHKle7W6rYS336ukAWTwvucPLPk3pEnRm~Rf4F1Y-4P~HDjSC1N8GuDjcW6v6DUITDlRTvVzmkZG-ppKF7hjPPM7t3oYojAyQhEZ2~nlEOJmeQEp6zfaiAPsedbRdww-J54FdDYp9AUAg__",
          address: "President and CEO , PrintReach , USA",
        },
        {
          id: 3,
          review:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
          name: "John Doe",
          rating: 5,
          image:
            "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOF-kwz6q7b6MILz8~zzH6kb0htM~dlnYSlBy-bWEtUqdRM66Tlyx-Im8GIp5zFkgkwFNXUmuzaXEIov6Nh1hTB652pnU9JheTm2m4n51eMLEW9-JKQJmtw9hf6~-v33r~2ivSROsJ7OSAEtZvBpPXbk8pbMPPXxdAbTMxJDha0gbctqB7hcsQsgWlc8KD25sa1WTD63w5O5is5B67B3W9E7GMBmmehqVo01mjEjKKsT~ba-mwGTQoW~DbcjzZzoNWK3Ii~3bJ82avjyoqgQpYSeJ1MWIi4melW1uUBcx9H7eI~k3PyXE6xGwxIZI~glaSYv8Cx6hQrjP6Vj3nr4mA__",
          address: "President and CEO , PrintReach , USA",
        },
        {
          id: 4,
          review:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
          name: "John Doe",
          rating: 5,
          image:
            "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOF-kwz6q7b6MILz8~zzH6kb0htM~dlnYSlBy-bWEtUqdRM66Tlyx-Im8GIp5zFkgkwFNXUmuzaXEIov6Nh1hTB652pnU9JheTm2m4n51eMLEW9-JKQJmtw9hf6~-v33r~2ivSROsJ7OSAEtZvBpPXbk8pbMPPXxdAbTMxJDha0gbctqB7hcsQsgWlc8KD25sa1WTD63w5O5is5B67B3W9E7GMBmmehqVo01mjEjKKsT~ba-mwGTQoW~DbcjzZzoNWK3Ii~3bJ82avjyoqgQpYSeJ1MWIi4melW1uUBcx9H7eI~k3PyXE6xGwxIZI~glaSYv8Cx6hQrjP6Vj3nr4mA__",
          address: "President and CEO , PrintReach , USA",
        },
        {
          id: 5,
          review:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
          name: "John Doe",
          rating: 5,
          image:
            "https://s3-alpha-sig.figma.com/img/701a/f49b/47caa9bbf738b70c44ef13c2c615ed36?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mOF-kwz6q7b6MILz8~zzH6kb0htM~dlnYSlBy-bWEtUqdRM66Tlyx-Im8GIp5zFkgkwFNXUmuzaXEIov6Nh1hTB652pnU9JheTm2m4n51eMLEW9-JKQJmtw9hf6~-v33r~2ivSROsJ7OSAEtZvBpPXbk8pbMPPXxdAbTMxJDha0gbctqB7hcsQsgWlc8KD25sa1WTD63w5O5is5B67B3W9E7GMBmmehqVo01mjEjKKsT~ba-mwGTQoW~DbcjzZzoNWK3Ii~3bJ82avjyoqgQpYSeJ1MWIi4melW1uUBcx9H7eI~k3PyXE6xGwxIZI~glaSYv8Cx6hQrjP6Vj3nr4mA__",
          address: "President and CEO , PrintReach , USA",
        },
        {
          id: 6,
          review:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ",
          name: "John Doe",
          rating: 5,
          image:
            "https://s3-alpha-sig.figma.com/img/a2ed/e07c/11849dd0ba0598512e6e3cb72bc7dabb?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YogyFFvnuTp0R1IGpQPR~4X3jShxxb6vU9FN2wcb2f-rWdK3Qdw0VblxMPW7XNFUxLNQEEfZCKZv1q2p-e8Wuyv3l-yj27a2Uow06Zi0sx7gK~13yHO0bZOE~9Usg1DTxOxq-w-ay9TZWJPQCtXUEPyhJ9w1gqs37UZKRrryeAnwbV3yhmH7o4rs6Y1LD52rpUXzCiBGLFHKle7W6rYS336ukAWTwvucPLPk3pEnRm~Rf4F1Y-4P~HDjSC1N8GuDjcW6v6DUITDlRTvVzmkZG-ppKF7hjPPM7t3oYojAyQhEZ2~nlEOJmeQEp6zfaiAPsedbRdww-J54FdDYp9AUAg__",
          address: "President and CEO , PrintReach , USA",
        },
      ];

  return (
    <div className="bg-[#1C4670] w-full py-10">
      <h1 className="text-white text-3xl font-bold text-center mb-6">
        What People Say About Us
      </h1>

      {/* Parent container for cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {ratingCard.map((card) => (
          <div
            key={card.id}
            className="w-[300px] bg-[#2D6899] rounded-md shadow-lg p-6"
          >
            <div className="flex items-center gap-4">
              <img
                src={card.image}
                alt="Reviewer"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h2 className="text-white text-xl font-semibold">
                  {card.name}
                </h2>
                <p className="text-white text-sm">{card.address}</p>
              </div>
            </div>

            <p className="text-white text-sm mt-4">{card.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
