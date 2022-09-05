import React from "react";

import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  PagerIndicator,
  Stack,
  Slider,
  Grid,
  List,
  RatingBar,
  Input,
} from "components";

const HomePagePage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  function handleNavigate1() {
    navigate("/cart");
  }
  function handleNavigate2() {
    navigate("/categorieswithsidebar");
  }
  function handleNavigate5() {
    navigate("/categorieswithsidebar");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] w-[100%]">
            <Img
              src="images/img_volume.svg"
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] w-[2%]"
              alt="volume"
            />
            <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Elliye{" "}
            </Text>
            <Text
              className="common-pointer cursor-pointer hover:font-bold font-medium lg:ml-[228px] xl:ml-[261px] 2xl:ml-[294px] 3xl:ml-[353px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]"
              onClick={handleNavigate5}
            >
              Categories
            </Text>
            <Text className="cursor-pointer hover:font-bold font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
              New Arrival
            </Text>
            <Text className="cursor-pointer hover:font-bold font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
              Features
            </Text>
            <Text className="cursor-pointer hover:font-bold font-medium lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
              Collections
            </Text>
            <Button
              className="common-pointer lg:ml-[152px] xl:ml-[174px] 2xl:ml-[196px] 3xl:ml-[235px] text-center w-[4%]"
              onClick={handleNavigate1}
            ></Button>
            <Button
              className="common-pointer font-bold lg:ml-[36px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] 2xl:mr-[108px] 3xl:mr-[129px] lg:mr-[84px] xl:mr-[96px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[6%]"
              onClick={googleSignIn}
              size="md"
              variant="FillGray800"
            >
              Login
            </Button>
          </Row>
        </header>
        <PagerIndicator
          className="bg-gray_50 cursor-pointer h-[700px] lg:mx-[2px] 2xl:mx-[3px] xl:mx-[3px] 3xl:mx-[4px] 2xl:pl-[108px] 3xl:pl-[129px] lg:pl-[84px] xl:pl-[96px] w-[max-content]"
          onClick={() => sliderRef.current?.slideNext()}
          count={3}
          activeCss="inline-block cursor-pointer rounded-radius50 w-[10px] h-[10px] bg-gray_50 lg:mx-[2px] xl:mx-[3px] 2xl:mx-[3px] 3xl:mx-[4px]"
          activeIndex={sliderState}
          inactiveCss="inline-block cursor-pointer rounded-radius50 w-[10px] h-[10px] bg-colors lg:mx-[2px] xl:mx-[3px] 2xl:mx-[3px] 3xl:mx-[4px]"
          sliderRef={sliderRef}
          selectedWrapperCss="inline-block"
          unselectedWrapperCss="inline-block"
        />
        <Row className="items-center justify-between 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] 3xl:mt-[100px] lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] w-[85%]">
          <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
            Categories
          </Text>
          <Text className="font-medium 2xl:ml-[1018px] 3xl:ml-[1222px] lg:ml-[791px] xl:ml-[905px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
            View all
          </Text>
        </Row>
        <Row className="items-center 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[85%]">
          <Column className="bg-gray_50 items-center lg:p-[29px] xl:p-[33px] 2xl:p-[37px] 3xl:p-[45px] w-[15%]">
            <Img
              src="images/img_vector.svg"
              className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] lg:ml-[52px] xl:ml-[59px] 2xl:ml-[67px] 3xl:ml-[80px] lg:mr-[51px] xl:mr-[58px] 2xl:mr-[65px] 3xl:mr-[78px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] lg:w-[39px] xl:w-[45px] 2xl:w-[51px] 3xl:w-[61px]"
              alt="Vector"
            />
            <Text className="font-normal lg:mb-[29px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[45px] lg:ml-[54px] xl:ml-[62px] 2xl:ml-[69px] 3xl:ml-[83px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              Jacket
            </Text>
          </Column>
          <Column className="bg-gray_50 items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[29px] xl:p-[33px] 2xl:p-[37px] 3xl:p-[45px] w-[15%]">
            <Img
              src="images/img_file.svg"
              className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] w-[45%]"
              alt="file"
            />
            <Text className="font-normal lg:mb-[29px] xl:mb-[33px] 2xl:mb-[38px] 3xl:mb-[45px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              Shirt
            </Text>
          </Column>
          <Column className="bg-gray_50 items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[29px] xl:p-[33px] 2xl:p-[37px] 3xl:p-[45px] w-[15%]">
            <Img
              src="images/img_vector_68X43.svg"
              className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] lg:ml-[58px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[30%]"
              alt="Vector One"
            />
            <Text className="font-normal lg:mb-[29px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[45px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              Pants
            </Text>
          </Column>
          <Column className="bg-gray_800 items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[29px] xl:p-[33px] 2xl:p-[37px] 3xl:p-[45px] w-[15%]">
            <Img
              src="images/img_cut.svg"
              className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[47%]"
              alt="cut"
            />
            <Text className="font-normal lg:mb-[29px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[45px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
              Shoes
            </Text>
          </Column>
          <Column className="bg-gray_50 items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[29px] xl:p-[33px] 2xl:p-[37px] 3xl:p-[45px] w-[15%]">
            <Img
              src="images/img_vector_68X48.svg"
              className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] lg:ml-[57px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[33%]"
              alt="Vector Two"
            />
            <Text className="font-normal lg:mb-[29px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[45px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              Dress
            </Text>
          </Column>
          <Column className="bg-gray_50 items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[29px] xl:p-[33px] 2xl:p-[37px] 3xl:p-[45px] w-[15%]">
            <Img
              src="images/img_globe.svg"
              className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[47%]"
              alt="globe"
            />
            <Text className="font-normal lg:mb-[29px] xl:mb-[33px] 2xl:mb-[38px] 3xl:mb-[45px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              Accesories
            </Text>
          </Column>
        </Row>
        <Row className="items-center justify-between 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[97px] w-[85%]">
          <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
            New Arrivals
          </Text>
          <Text className="font-medium 3xl:ml-[1195px] lg:ml-[774px] xl:ml-[886px] 2xl:ml-[996px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
            View all
          </Text>
        </Row>
        <Row className="items-center 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[38px] w-[85%]">
          <Row className="bg-gray_50 items-center lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[49%]">
            <Img
              src="images/img_rectangle39_2.png"
              className="lg:h-[369px] xl:h-[421px] 2xl:h-[474px] 3xl:h-[569px] lg:ml-[35px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] lg:my-[16px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[25px] w-[52%]"
              alt="placeholder Three"
            />
            <Column className="items-center lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:mr-[35px] xl:mr-[41px] 2xl:mr-[46px] 3xl:mr-[55px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[33%]">
              <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Purple Warm Jacket
              </Text>
              <Text className="font-medium lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
              <Button
                className="font-bold lg:ml-[13px] xl:ml-[15px] 2xl:ml-[16px] 3xl:ml-[20px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[82%]"
                size="md"
                variant="FillGray800"
              >
                Add to Cart
              </Button>
            </Column>
          </Row>
          <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-2 lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[49%]">
            <Column className="bg-gray_50 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
              <Img
                src="images/img_placeholder.png"
                className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] lg:ml-[60px] xl:ml-[69px] 2xl:ml-[77px] 3xl:ml-[93px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px]"
                alt="placeholder Four"
              />
              <Text className="font-medium lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Blue Grey Warm Jacket
              </Text>
              <Text className="font-medium lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] xl:ml-[113px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[98px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
            <Column className="bg-gray_50 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
              <Img
                src="images/img_rectangle39_1.png"
                className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px]"
                alt="placeholder Five"
              />
              <Text className="font-medium lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Denim Jacket
              </Text>
              <Text className="font-medium lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] xl:ml-[113px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[98px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
            <Column className="bg-gray_50 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
              <Img
                src="images/img_placeholder_5.png"
                className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px]"
                alt="placeholder Six"
              />
              <Text className="font-medium 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[86px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Black Jacket
              </Text>
              <Text className="font-medium lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] xl:ml-[113px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[98px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
            <Column className="bg-gray_50 items-center lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]">
              <Img
                src="images/img_placeholder_4.png"
                className="lg:h-[104px] xl:h-[119px] 2xl:h-[133px] 3xl:h-[160px] lg:ml-[60px] xl:ml-[69px] 2xl:ml-[77px] 3xl:ml-[93px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:w-[103px] xl:w-[118px] 2xl:w-[132px] 3xl:w-[159px]"
                alt="placeholder Seven"
              />
              <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Green Polar Jacket
              </Text>
              <Text className="font-medium lg:mb-[21px] xl:mb-[24px] 2xl:mb-[27px] 3xl:mb-[32px] xl:ml-[113px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[98px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
          </Grid>
        </Row>
        <Row className="items-center justify-between 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] w-[85%]">
          <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
            Featured
          </Text>
          <Text className="font-medium 2xl:ml-[1049px] 3xl:ml-[1258px] lg:ml-[815px] xl:ml-[932px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
            View all
          </Text>
        </Row>
        <Row className="items-center 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[37px] lg:pr-[39px] xl:pr-[44px] 2xl:pr-[50px] 3xl:pr-[60px] w-[85%]">
          <Column className="border-2 border-gray_800 border-solid items-center lg:p-[25px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[25%]">
            <Img
              src="images/img_placeholder_2.png"
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
              alt="placeholder Eight"
            />
            <Text className="font-medium lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Black Briefcase
            </Text>
            <Text className="font-medium xl:ml-[113px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[98px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
            <Button
              className="font-bold lg:mb-[25px] xl:mb-[29px] 2xl:mb-[32px] 3xl:mb-[39px] lg:ml-[53px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[67%]"
              size="md"
              variant="FillGray800"
            >
              Add to Cart
            </Button>
          </Column>
          <List
            className="xl:gap-[110px] 2xl:gap-[124px] 3xl:gap-[149px] lg:gap-[96px] grid grid-cols-3 min-h-[auto] lg:ml-[57px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:mr-[39px] xl:mr-[44px] 2xl:mr-[50px] 3xl:mr-[60px] w-[69%]"
            orientation="horizontal"
          >
            <Column className="items-center mt-[0.5px] pb-[4px] w-[100%]">
              <Img
                src="images/img_graytshirtis.png"
                className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
                alt="placeholder Nine"
              />
              <Text className="font-medium lg:ml-[40px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Pink Shirt
              </Text>
              <Text className="font-medium mb-[4.27px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[92px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
            <Column className="items-center pb-[4px] w-[100%]">
              <Img
                src="images/img_redcheckereds.png"
                className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
                alt="placeholder Ten"
              />
              <Text className="font-medium lg:ml-[30px] xl:ml-[35px] 2xl:ml-[39px] 3xl:ml-[47px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Gray T-shirt
              </Text>
              <Text className="font-medium mb-[4.27px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[92px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
            <Column className="items-center pb-[4px] w-[100%]">
              <Img
                src="images/img_placeholder_245X245.png"
                className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
                alt="placeholder Eleven"
              />
              <Text className="font-medium lg:ml-[32px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Red Flannel
              </Text>
              <Text className="font-medium mb-[4.27px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[92px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                $299
              </Text>
            </Column>
          </List>
        </Row>
        <Grid className="xl:gap-[110px] 2xl:gap-[124px] 3xl:gap-[149px] lg:gap-[96px] grid grid-cols-4 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[85%]">
          <Column className="items-center pb-[4px] w-[100%]">
            <Img
              src="images/img_placeholder_4.png"
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
              alt="stylishblacks"
            />
            <Text className="font-medium lg:ml-[16px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Black Highheels
            </Text>
            <Text className="font-medium mb-[4.27px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[92px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center pb-[4px] w-[100%]">
            <Img
              src="images/img_rectangle39_2.png"
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
              alt="casualfabrics"
            />
            <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Casual Grey Shoes
            </Text>
            <Text className="font-medium mb-[4.27px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[92px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center pb-[4px] w-[100%]">
            <Img
              src="images/img_placeholder_523X800.png"
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
              alt="shoesisolated"
            />
            <Text className="font-medium lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Brown Shoes
            </Text>
            <Text className="font-medium mb-[4.27px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[92px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center pb-[4px] w-[100%]">
            <Img
              src="images/img_blackbusiness.png"
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
              alt="businessshirt"
            />
            <Text className="font-medium lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Business Shirt
            </Text>
            <Text className="font-medium mb-[4.27px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[92px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center pb-[4px] w-[100%]">
            <Img
              src="images/img_rectangle39.png"
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
              alt="warmpantsPXLSeven"
            />
            <Text className="font-medium lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Grey Warm Pants
            </Text>
            <Text className="font-medium mb-[4.27px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[92px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center pb-[4px] w-[100%]">
            <Img
              src="images/img_pink3tz3pbb1.png"
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
              alt="sportJ9BZXUY"
            />
            <Text className="font-medium lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Green Sport Jacket
            </Text>
            <Text className="font-medium mb-[4.27px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[92px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center pb-[4px] w-[100%]">
            <Img
              src="images/img_placeholder_3.png"
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
              alt="travel8V7CNKE"
            />
            <Text className="font-medium ml-[2.5px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Purple Warm Jacket
            </Text>
            <Text className="font-medium mb-[4.27px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[92px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center pb-[4px] w-[100%]">
            <Img
              src="images/img_rectangle39_1.png"
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
              alt="womensdenimsk"
            />
            <Text className="font-medium lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Woman Denim Skirt
            </Text>
            <Text className="font-medium mb-[4.27px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[76px] 3xl:ml-[92px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
        </Grid>
        <Stack className="lg:h-[318px] xl:h-[363px] 2xl:h-[409px] 3xl:h-[490px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]">
          <Column className="absolute bg-gray_800 bottom-[22%] lg:p-[30px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] top-[0] w-[100%]">
            <Text className="font-bold lg:mb-[196px] xl:mb-[225px] 2xl:mb-[253px] 3xl:mb-[303px] 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] 2xl:mr-[1050px] 3xl:mr-[1260px] lg:mr-[816px] xl:mr-[934px] lg:mt-[30px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-white_A700 w-[auto]">
              Summer Collections
            </Text>
          </Column>
          <Stack className="absolute bottom-[0] lg:h-[234px] xl:h-[267px] 2xl:h-[301px] 3xl:h-[361px] inset-x-[0] mx-[auto] top-[26%] w-[87%]">
            <Row className="absolute items-center justify-between right-[2%] w-[98%]">
              <Column className="bg-bluegray_100 items-center w-[32%]">
                <Column
                  className="bg-cover bg-repeat justify-center lg:p-[34px] xl:p-[39px] 2xl:p-[44px] 3xl:p-[53px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group15.png')" }}
                >
                  <Text className="font-normal leading-[normal] lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] lg:mr-[161px] xl:mr-[184px] 2xl:mr-[207px] 3xl:mr-[248px] xl:my-[107px] 2xl:my-[120px] 3xl:my-[144px] lg:my-[93px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[46%]">
                    <span className="text-gray_800 font-poppins">
                      Summer <br />
                    </span>
                    <span className="text-gray_800 font-poppins font-bold">
                      Collection
                    </span>
                  </Text>
                </Column>
              </Column>
              <Column className="bg-bluegray_100 items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[32%]">
                <Column
                  className="bg-cover bg-repeat justify-center lg:p-[30px] xl:p-[35px] 2xl:p-[39px] 3xl:p-[47px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group13.png')" }}
                >
                  <Text className="font-normal leading-[normal] xl:mb-[107px] 2xl:mb-[120px] 3xl:mb-[144px] lg:mb-[93px] lg:ml-[30px] xl:ml-[35px] 2xl:ml-[39px] 3xl:ml-[47px] lg:mr-[164px] xl:mr-[188px] 2xl:mr-[211px] 3xl:mr-[253px] xl:mt-[106px] 2xl:mt-[119px] 3xl:mt-[143px] lg:mt-[92px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-white_A700 w-[45%]">
                    <span className="text-white_A700 font-poppins">
                      Casual <br />
                    </span>
                    <span className="text-white_A700 font-poppins font-bold">
                      Collection
                    </span>
                  </Text>
                </Column>
              </Column>
              <Column className="bg-bluegray_100 items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[32%]">
                <Column
                  className="bg-cover bg-repeat justify-center lg:p-[30px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] w-[100%]"
                  style={{
                    backgroundImage:
                      "url('images/img_placeholder_364X384.png')",
                  }}
                >
                  <Text className="font-normal leading-[normal] xl:mb-[107px] 2xl:mb-[120px] 3xl:mb-[144px] lg:mb-[93px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] lg:mr-[165px] xl:mr-[188px] 2xl:mr-[212px] 3xl:mr-[254px] xl:mt-[105px] 2xl:mt-[119px] 3xl:mt-[142px] lg:mt-[92px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-white_A700 w-[45%]">
                    <span className="text-white_A700 font-poppins">
                      Big Vibe <br />
                    </span>
                    <span className="text-white_A700 font-poppins font-bold">
                      Collection
                    </span>
                  </Text>
                </Column>
              </Column>
            </Row>
            <Button
              className="absolute flex lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-y-[0] items-center justify-center left-[96%] my-[auto] right-[0] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
              size="mdIcn"
              variant="icbFillWhiteA700"
            >
              <Img
                src="images/img_menu.svg"
                className="flex items-center justify-center"
                alt="menu"
              />
            </Button>
          </Stack>
        </Stack>
        <Row className="items-center justify-between 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] 3xl:mt-[100px] lg:mt-[64px] xl:mt-[74px] 2xl:mt-[83px] w-[85%]">
          <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
            Popular This Week
          </Text>
          <Text className="font-medium 3xl:ml-[1099px] lg:ml-[712px] xl:ml-[814px] 2xl:ml-[916px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
            View all
          </Text>
        </Row>
        <List
          className="gap-[0] min-h-[auto] 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[85%]"
          orientation="vertical"
        >
          <Row className="items-center justify-end xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[10px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] w-[100%]">
            <Img
              src="images/img_placeholder_175X225.png"
              className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] w-[14%]"
              alt="placeholder Twelve"
            />
            <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:pr-[2px] 2xl:pr-[3px] xl:pr-[3px] 3xl:pr-[4px] lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] w-[19%]">
              <Text className="font-medium lg:mr-[45px] xl:mr-[52px] 2xl:mr-[58px] 3xl:mr-[70px] 2xl:mt-[3px] xl:mt-[3px] lg:mt-[3px] 3xl:mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Checkered Jacket
              </Text>
              <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                $299
              </Text>
              <RatingBar
                className="lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px]"
                value={4}
                starCount={5}
                color="var(--gray_50)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
            <Img
              src="images/img_placeholder_6.png"
              className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] w-[14%]"
              alt="placeholder One"
            />
            <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[19%]">
              <Text className="font-medium 3xl:mr-[106px] lg:mr-[68px] xl:mr-[78px] 2xl:mr-[88px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Elegant Jacket
              </Text>
              <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                $299
              </Text>
              <RatingBar
                className="lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px]"
                value={4}
                starCount={5}
                color="var(--gray_50)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
            <Img
              src="images/img_placeholder_7.png"
              className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] w-[14%]"
              alt="placeholder Two"
            />
            <Column className="xl:mx-[11px] 2xl:mx-[12px] 3xl:mx-[15px] lg:mx-[9px] pt-[4px] w-[15%]">
              <Text className="font-medium mt-[4.87px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Blue Woman Denim
              </Text>
              <Text className="font-medium lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                $299
              </Text>
              <RatingBar
                className="lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px]"
                value={4}
                starCount={5}
                color="var(--gray_50)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
            <Img
              src="images/img_placeholder_8.png"
              className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] w-[14%]"
              alt="placeholder Thirteen"
            />
            <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[19%]">
              <Text className="font-medium 3xl:mr-[114px] lg:mr-[74px] xl:mr-[84px] 2xl:mr-[95px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Orange Jeans
              </Text>
              <Text className="font-medium xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                $299
              </Text>
              <RatingBar
                className="lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px]"
                value={4}
                starCount={5}
                color="var(--gray_50)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
            <Img
              src="images/img_placeholder_9.png"
              className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] w-[14%]"
              alt="placeholder One One"
            />
            <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:pr-[2px] 2xl:pr-[3px] xl:pr-[3px] 3xl:pr-[4px] lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] w-[19%]">
              <Text className="font-medium 2xl:mt-[3px] xl:mt-[3px] lg:mt-[3px] 3xl:mt-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Blue Jeans
              </Text>
              <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                $299
              </Text>
              <RatingBar
                className="2xl:mr-[108px] 3xl:mr-[130px] lg:mr-[84px] xl:mr-[96px] lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px]"
                value={4}
                starCount={5}
                color="var(--gray_50)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
            <Img
              src="images/img_placeholder_10.png"
              className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] w-[14%]"
              alt="placeholder Two One"
            />
            <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mr-[61px] xl:mr-[70px] 2xl:mr-[79px] 3xl:mr-[95px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[10%]">
              <Text className="font-medium lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Gray Watch
              </Text>
              <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                $299
              </Text>
              <RatingBar
                className="lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px]"
                value={4}
                starCount={5}
                color="var(--gray_50)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[100%]">
            <Img
              src="images/img_placeholder_11.png"
              className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] w-[14%]"
              alt="placeholder Fourteen"
            />
            <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[19%]">
              <Text className="font-medium lg:mr-[43px] xl:mr-[49px] 2xl:mr-[55px] 3xl:mr-[66px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Black Sport Jacket
              </Text>
              <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                $299
              </Text>
              <RatingBar
                className="lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px]"
                value={4}
                starCount={5}
                color="var(--gray_50)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
            <Img
              src="images/img_placeholder_12.png"
              className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] w-[14%]"
              alt="placeholder One Two"
            />
            <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] pr-[4px] pt-[4px] w-[19%]">
              <Text className="font-medium mt-[4.87px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Wristwatch
              </Text>
              <Text className="font-medium lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                $299
              </Text>
              <RatingBar
                className="2xl:mr-[108px] 3xl:mr-[130px] lg:mr-[84px] xl:mr-[96px] lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px]"
                value={4}
                starCount={5}
                color="var(--gray_50)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
            <Img
              src="images/img_placeholder_13.png"
              className="lg:h-[103px] xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:my-[13px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] w-[14%]"
              alt="placeholder Two Two"
            />
            <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mr-[49px] xl:mr-[56px] 2xl:mr-[63px] 3xl:mr-[76px] pt-[4px] w-[11%]">
              <Text className="font-medium mt-[4.87px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Classic Watch
              </Text>
              <Text className="font-medium lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_500 w-[auto]">
                $299
              </Text>
              <RatingBar
                className="lg:mt-[13px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[20px]"
                value={4}
                starCount={5}
                color="var(--gray_50)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Column>
          </Row>
        </List>
        <Column className="3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] 2xl:px-[108px] 3xl:px-[129px] lg:px-[84px] xl:px-[96px] w-[100%]">
          <Text className="font-bold 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] 2xl:mr-[1118px] 3xl:mr-[1341px] lg:mr-[869px] xl:mr-[994px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
            Why Choose Us
          </Text>
        </Column>
        <Row className="bg-gray_50 items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:p-[36px] xl:p-[42px] 2xl:p-[47px] 3xl:p-[56px] w-[100%]">
          <Column className="items-center lg:ml-[134px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[207px] lg:my-[36px] xl:my-[42px] 2xl:my-[47px] 3xl:my-[56px] w-[23%]">
            <Stack className="border-2 border-gray_500 border-solid 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:px-[16px] xl:px-[18px] 2xl:px-[21px] 3xl:px-[25px] rounded-radius50 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
              <Img
                src="images/img_music.svg"
                className="absolute lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] inset-[0] justify-center m-[auto] w-[52%]"
                alt="music"
              />
            </Stack>
            <Text className="font-bold lg:ml-[14px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Free Delivery
            </Text>
            <Text className="font-normal leading-[normal] mb-[0.75px] lg:mr-[119px] xl:mr-[136px] 2xl:mr-[153px] 3xl:mr-[183px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center text-gray_500 w-[51%]">
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
          <Column className="items-center ml-[0.5px] lg:my-[36px] xl:my-[42px] 2xl:my-[47px] 3xl:my-[56px] w-[23%]">
            <Stack className="border-2 border-gray_500 border-solid 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] lg:px-[16px] xl:px-[19px] 2xl:px-[21px] 3xl:px-[26px] rounded-radius50 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
              <Img
                src="images/img_computer.svg"
                className="absolute lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[42px] inset-[0] justify-center m-[auto] w-[50%]"
                alt="computer"
              />
            </Stack>
            <Column className="items-center mb-[0.76px] lg:mr-[119px] xl:mr-[136px] 2xl:mr-[153px] 3xl:mr-[183px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[51%]">
              <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Payment Method
              </Text>
              <Text className="font-normal leading-[normal] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center text-gray_500 w-[100%]">
                This free shipping
                <br />
                only for selected region
              </Text>
            </Column>
          </Column>
          <Column className="items-center ml-[0.5px] lg:my-[36px] xl:my-[42px] 2xl:my-[47px] 3xl:my-[56px] w-[23%]">
            <Column className="items-center lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[29%]">
              <Stack className="border-2 border-gray_500 border-solid 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] lg:px-[15px] xl:px-[18px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius50 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
                <Img
                  src="images/img_clock.svg"
                  className="absolute lg:h-[37px] xl:h-[42px] 2xl:h-[47px] 3xl:h-[56px] inset-[0] justify-center m-[auto] w-[37%]"
                  alt="clock"
                />
              </Stack>
              <Text className="font-bold lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Warranty
              </Text>
            </Column>
            <Text className="font-normal leading-[normal] mb-[0.75px] lg:mr-[114px] xl:mr-[130px] 2xl:mr-[147px] 3xl:mr-[176px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center text-gray_500 w-[52%]">
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
          <Column className="items-center ml-[0.5px] lg:mr-[129px] xl:mr-[148px] 2xl:mr-[166px] 3xl:mr-[199px] lg:my-[36px] xl:my-[42px] 2xl:my-[47px] 3xl:my-[56px] w-[13%]">
            <Stack className="border-2 border-gray_500 border-solid 3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[40px] 3xl:ml-[48px] lg:px-[16px] xl:px-[18px] 2xl:px-[21px] 3xl:px-[25px] rounded-radius50 3xl:w-[108px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px]">
              <Img
                src="images/img_music_45X38.svg"
                className="absolute lg:h-[36px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] inset-[0] justify-center m-[auto] w-[43%]"
                alt="music One"
              />
            </Stack>
            <Text className="font-bold lg:mt-[23px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Customer Support{" "}
            </Text>
            <Text className="font-normal leading-[normal] mb-[0.75px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center text-gray_500 w-[93%]">
              This free shipping
              <br />
              only for selected region
            </Text>
          </Column>
        </Row>
        <Img
          src="images/img_brand.svg"
          className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] lg:ml-[277px] xl:ml-[316px] 2xl:ml-[356px] 3xl:ml-[427px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[50%]"
          alt="brand"
        />
        <footer className="bg-gray_800 lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Column className="lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mr-[137px] xl:mr-[157px] 2xl:mr-[177px] 3xl:mr-[212px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[80%]">
            <Row className="justify-evenly pt-[4px] w-[100%]">
              <Column className="mt-[4.48px] w-[36%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Join our Newsletter
                </Text>
                <Text className="font-normal leading-[normal] 2xl:mr-[103px] 3xl:mr-[124px] lg:mr-[80px] xl:mr-[92px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[75%]">
                  Drop your email below to get update about us, <br />
                  lastest news, tips, and more!
                </Text>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] placeholder:text-gray_500_87 text-gray_500_87 tracking-ls1 w-[100%]"
                  wrapClassName="2xl:mt-[26px] 3xl:mt-[32px] flex lg:mt-[20px] w-[69%] xl:mt-[23px]"
                  type="email"
                  name="input"
                  placeholder="Enter your email"
                  suffix={
                    <Img
                      src="images/img_menu.svg"
                      className="lg:w-[10px] lg:ml-[20px] lg:mr-[3px] xl:w-[12px] xl:ml-[23px] xl:mr-[4px] 2xl:w-[13px] 2xl:ml-[26px] 2xl:mr-[4px] 3xl:w-[16px] 3xl:ml-[31px] 3xl:mr-[5px] my-[auto]"
                      alt="menu"
                    />
                  }
                  size="sm"
                  variant="FillWhiteA700"
                ></Input>
              </Column>
              <Column className="mt-[4.48px] pb-[4px] pr-[4px] w-[18%]">
                <Text className="font-bold 3xl:mr-[100px] lg:mr-[65px] xl:mr-[74px] 2xl:mr-[84px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Product Links
                </Text>
                <Text className="font-normal lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Categories
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  New Arrival
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Features
                </Text>
                <Text className="font-normal mb-[4.25px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Collections
                </Text>
              </Column>
              <Column className="mb-[0.33px] xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] pb-[4px] pr-[4px] w-[18%]">
                <Text className="font-bold xl:mr-[102px] 2xl:mr-[115px] 3xl:mr-[138px] lg:mr-[89px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Company
                </Text>
                <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  About
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Blog
                </Text>
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Careers
                </Text>
                <Text className="font-normal lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Contact{" "}
                </Text>
                <Text className="font-normal mb-[4.44px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Services
                </Text>
              </Column>
              <Column className="xl:mt-[5px] lg:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] pb-[4px] pr-[4px] w-[18%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Support
                </Text>
                <Text className="font-normal lg:mt-[20px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Support Center
                </Text>
                <Text className="font-normal xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  FAQ
                </Text>
                <Text className="font-normal lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Privacy Policy
                </Text>
                <Text className="font-normal mb-[4.44px] 3xl:mr-[117px] lg:mr-[75px] xl:mr-[86px] 2xl:mr-[97px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                  Terms of service
                </Text>
              </Column>
              <Column className="2xl:mt-[3px] xl:mt-[3px] lg:mt-[3px] 3xl:mt-[4px] pb-[2px] w-[10%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Get In Touch
                </Text>
                <Img
                  src="images/img_sosmedia.svg"
                  className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mb-[1.21px] ml-[2px] lg:mt-[19px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[76%]"
                  alt="sosmedia"
                />
              </Column>
            </Row>
            <Text className="font-normal mb-[0.66px] lg:ml-[394px] xl:ml-[451px] 2xl:ml-[507px] 3xl:ml-[608px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-white_A700 w-[auto]">
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default HomePagePage;
