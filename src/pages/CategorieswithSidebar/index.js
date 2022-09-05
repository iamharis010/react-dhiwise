import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Button,
  CheckBox,
  Line,
  RatingBar,
  Grid,
} from "components";

const CategorieswithSidebarPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/products");
  }
  function handleNavigate9() {
    navigate("/products");
  }

  return (
    <>
      <Column className="bg-white_A700 font-poppins items-center mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
            <Img
              src="images/img_volume.svg"
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] 2xl:ml-[90px] w-[2%]"
              alt="volume"
            />
            <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Elliye{" "}
            </Text>
            <Row className="bg-white_A700 border-2 border-gray_50 border-solid items-center justify-center lg:ml-[239px] xl:ml-[274px] 2xl:ml-[308px] 3xl:ml-[370px] lg:pl-[18px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] w-[31%]">
              <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500_87 w-[auto]">
                Search here
              </Text>
              <Stack className="bg-gray_800 lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[231px] xl:ml-[264px] 2xl:ml-[297px] 3xl:ml-[357px] 2xl:px-[10px] 3xl:px-[12px] lg:px-[8px] xl:px-[9px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]">
                <Img
                  src="images/img_search.svg"
                  className="absolute lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] inset-[0] justify-center m-[auto] lg:w-[10px] xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px]"
                  alt="search"
                />
              </Stack>
            </Row>
            <Img
              src="images/img_car.svg"
              className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:ml-[178px] xl:ml-[204px] 2xl:ml-[229px] 3xl:ml-[275px] w-[4%]"
              alt="car"
            />
            <Button
              className="font-bold lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[6%]"
              size="sm"
              variant="FillGray800"
            >
              Login
            </Button>
          </Row>
        </header>
        <Column className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] 2xl:px-[108px] 3xl:px-[129px] lg:px-[84px] xl:px-[96px] w-[100%]">
          <Row className="w-[12%]">
            <Text className="font-medium mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              Home
            </Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
              {">"}
            </Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
              Categories
            </Text>
          </Row>
        </Column>
        <Text className="font-bold lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
          Categories
        </Text>
        <Row className="lg:mt-[46px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[71px] w-[85%]">
          <Column className="w-[17%]">
            <Column className="lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[88%]">
              <Row className="justify-between w-[97%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                  Filter by Price
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] mt-[4px] w-[4%]"
                  alt="arrowdown"
                />
              </Row>
              <Column className="justify-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] py-[1px] w-[68%]">
                <CheckBox
                  className="font-normal mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500"
                  inputClassName="h-[24px] mr-[5px] w-[24px]"
                  name="AllPrice"
                  label="All Price"
                ></CheckBox>
                <Row className="items-center mr-[auto] lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[87%]">
                  <Button
                    className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    size="smIcn"
                    variant="icbFillGray800"
                  >
                    <Img
                      src="images/img_vector8.svg"
                      className="flex items-center justify-center"
                      alt="VectorEight"
                    />
                  </Button>
                  <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                    $100 - $250
                  </Text>
                </Row>
                <CheckBox
                  className="font-normal lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500"
                  inputClassName="h-[24px] mr-[5px] w-[24px]"
                  name="250500"
                  label="$250 - $500"
                ></CheckBox>
                <CheckBox
                  className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500"
                  inputClassName="h-[24px] mr-[5px] w-[24px]"
                  name="7501000"
                  label="$750 - $1.000"
                ></CheckBox>
                <CheckBox
                  className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[100%]"
                  inputClassName="h-[24px] mr-[5px] w-[24px]"
                  name="10001500"
                  label="$1000 - $1.500"
                ></CheckBox>
              </Column>
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]" />
            </Column>
            <Column className="lg:mt-[18px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[88%]">
              <Row className="justify-between w-[97%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                  Filter by Rating
                </Text>
                <Img
                  src="images/img_arrowdown.svg"
                  className="lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] mt-[4px] w-[4%]"
                  alt="arrowdown One"
                />
              </Row>
              <Column className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[78%]">
                <Row className="items-center w-[33%]">
                  <div className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                  <Img
                    src="images/img_star1.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="StarOne"
                  />
                </Row>
                <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[50%]">
                  <div className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                  <Img
                    src="images/img_star1_24X24.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="StarOne One"
                  />
                  <Img
                    src="images/img_star2.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="StarTwo"
                  />
                </Row>
                <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[67%]">
                  <div className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                  <Img
                    src="images/img_star1_1.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="StarOne Two"
                  />
                  <Img
                    src="images/img_star2_24X24.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="StarTwo One"
                  />
                  <Img
                    src="images/img_star3.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="StarThree"
                  />
                </Row>
                <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[83%]">
                  <Button
                    className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    size="smIcn"
                    variant="icbFillGray800"
                  >
                    <Img
                      src="images/img_vector8.svg"
                      className="flex items-center justify-center"
                      alt="VectorEight One"
                    />
                  </Button>
                  <Img
                    src="images/img_star1_2.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="StarOne Three"
                  />
                  <Img
                    src="images/img_star2_1.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="StarTwo Two"
                  />
                  <Img
                    src="images/img_star3_24X24.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="StarThree One"
                  />
                  <Img
                    src="images/img_star5.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="StarFive"
                  />
                </Row>
                <Row className="items-center justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                  <div className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                  <RatingBar
                    className=""
                    value={5}
                    starCount={5}
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                </Row>
              </Column>
              <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]" />
            </Column>
            <Row className="lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[86%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                Filter by Brand
              </Text>
              <Img
                src="images/img_arrowdown.svg"
                className="lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] lg:ml-[57px] xl:ml-[65px] 2xl:ml-[73px] 3xl:ml-[88px] mt-[3px] w-[4%]"
                alt="arrowdown Two"
              />
            </Row>
            <Row className="lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[86%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                Filter by Size
              </Text>
              <Img
                src="images/img_arrowdown.svg"
                className="lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] 3xl:ml-[105px] lg:ml-[68px] xl:ml-[78px] 2xl:ml-[87px] mt-[3px] w-[4%]"
                alt="arrowdown Three"
              />
            </Row>
          </Column>
          <Grid
            className="common-pointer lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-2 w-[83%]"
            onClick={handleNavigate4}
          >
            <Row
              className="common-pointer bg-gray_50 items-center justify-center lg:p-[37px] xl:p-[43px] 2xl:p-[48px] 3xl:p-[58px] w-[100%]"
              onClick={handleNavigate9}
            >
              <Img
                src="images/img_vector_gray_800.svg"
                className="3xl:h-[102px] lg:h-[66px] xl:h-[76px] 2xl:h-[85px] lg:ml-[64px] xl:ml-[74px] 2xl:ml-[83px] 3xl:ml-[99px] mt-[1px] 3xl:w-[101px] lg:w-[65px] xl:w-[75px] 2xl:w-[84px]"
                alt="Vector"
              />
              <Column className="lg:ml-[22px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] lg:mr-[50px] xl:mr-[57px] 2xl:mr-[64px] 3xl:mr-[77px] w-[34%]">
                <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
                  Jacket
                </Text>
                <Text className="font-normal xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_500 w-[auto]">
                  Collection
                </Text>
              </Column>
            </Row>
            <Row className="bg-gray_50 items-center justify-center lg:p-[42px] xl:p-[48px] 2xl:p-[54px] 3xl:p-[65px] w-[100%]">
              <Img
                src="images/img_vector_gray_800_100X110.svg"
                className="lg:h-[59px] xl:h-[67px] 2xl:h-[76px] 3xl:h-[91px] lg:ml-[60px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] w-[21%]"
                alt="Vector One"
              />
              <Column className="lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mr-[46px] xl:mr-[52px] 2xl:mr-[59px] 3xl:mr-[71px] w-[35%]">
                <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
                  Shirt
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_500 w-[auto]">
                  Collection
                </Text>
              </Column>
            </Row>
            <Row className="bg-gray_50 items-center justify-center lg:p-[38px] xl:p-[44px] 2xl:p-[49px] 3xl:p-[59px] w-[100%]">
              <Img
                src="images/img_vector_gray_800_113X72.svg"
                className="3xl:h-[102px] lg:h-[66px] xl:h-[76px] 2xl:h-[85px] 3xl:ml-[116px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[96px] w-[14%]"
                alt="Vector Two"
              />
              <Column className="lg:ml-[34px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[53px] lg:mr-[49px] xl:mr-[56px] 2xl:mr-[63px] 3xl:mr-[75px] w-[34%]">
                <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
                  Pants
                </Text>
                <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_500 w-[auto]">
                  Collection
                </Text>
              </Column>
            </Row>
            <Row className="bg-gray_50 items-center justify-center lg:p-[36px] xl:p-[42px] 2xl:p-[47px] 3xl:p-[56px] w-[100%]">
              <Img
                src="images/img_vector_gray_800_113X93.svg"
                className="3xl:h-[102px] lg:h-[66px] xl:h-[76px] 2xl:h-[85px] 3xl:ml-[112px] lg:ml-[72px] xl:ml-[83px] 2xl:ml-[93px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[17%]"
                alt="Vector Three"
              />
              <Column className="lg:ml-[26px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] lg:mr-[51px] xl:mr-[59px] 2xl:mr-[66px] 3xl:mr-[80px] w-[34%]">
                <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
                  Skirt
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_500 w-[auto]">
                  Collection
                </Text>
              </Column>
            </Row>
            <Column className="bg-gray_50 items-center lg:p-[25px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]">
              <Row className="bg-gray_50 items-center justify-center lg:pl-[13px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] lg:py-[13px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[62%]">
                <Img
                  src="images/img_vector_gray_800_113X80.svg"
                  className="3xl:h-[102px] lg:h-[66px] xl:h-[76px] 2xl:h-[85px] mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[24%]"
                  alt="Vector Four"
                />
                <Column className="lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] w-[54%]">
                  <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
                    Dress
                  </Text>
                  <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_500 w-[auto]">
                    Collection
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="bg-gray_50 items-center lg:p-[25px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]">
              <Row className="bg-gray_50 items-center justify-center lg:pl-[11px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:py-[11px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[66%]">
                <Img
                  src="images/img_vector_gray_800_113X113.svg"
                  className="3xl:h-[102px] lg:h-[66px] xl:h-[76px] 2xl:h-[85px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] 3xl:w-[101px] lg:w-[65px] xl:w-[75px] 2xl:w-[84px]"
                  alt="Vector Five"
                />
                <Column className="lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] w-[57%]">
                  <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
                    Underwear
                  </Text>
                  <Text className="font-normal xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_500 w-[auto]">
                    Collection
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="bg-gray_50 items-center lg:p-[25px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]">
              <Row className="bg-gray_50 items-center justify-center lg:pl-[13px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] lg:py-[13px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[62%]">
                <Img
                  src="images/img_vector_gray_800_80X113.svg"
                  className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] w-[34%]"
                  alt="Vector Six"
                />
                <Column className="lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[54%]">
                  <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
                    Shoes
                  </Text>
                  <Text className="font-normal xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_500 w-[auto]">
                    Collection
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="bg-gray_50 items-center lg:p-[25px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]">
              <Row className="bg-gray_50 items-center justify-center lg:pl-[13px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] lg:py-[13px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[66%]">
                <Img
                  src="images/img_vector_gray_800_93X113.svg"
                  className="lg:h-[55px] xl:h-[63px] 2xl:h-[70px] 3xl:h-[84px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] w-[32%]"
                  alt="Vector Seven"
                />
                <Column className="lg:ml-[22px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] w-[57%]">
                  <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
                    Accesories
                  </Text>
                  <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_500 w-[auto]">
                    Collection
                  </Text>
                </Column>
              </Row>
            </Column>
          </Grid>
        </Row>
        <footer className="bg-gray_800 lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[76px] w-[100%]">
          <Column className="items-center lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] mx-[auto] w-[85%]">
            <Row className="justify-evenly w-[100%]">
              <Column className="justify-end lg:pr-[2px] 2xl:pr-[3px] xl:pr-[3px] 3xl:pr-[4px] lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] w-[43%]">
                <Row className="mr-[auto] mt-[1px] w-[16%]">
                  <Img
                    src="images/img_group19.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[35%]"
                    alt="GroupNineteen"
                  />
                  <Text className="font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                    Elliye{" "}
                  </Text>
                </Row>
                <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[52%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor .
                </Text>
                <Row className="ml-[1px] mr-[auto] lg:mt-[25px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[21%]">
                  <Img
                    src="images/img_call.svg"
                    className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[11px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                    alt="call"
                  />
                  <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                    +1234567890
                  </Text>
                </Row>
                <Row className="ml-[2px] mr-[auto] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[30%]">
                  <Img
                    src="images/img_mail.svg"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[10%]"
                    alt="mail"
                  />
                  <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-white_A700 w-[auto]">
                    elliye@support.com
                  </Text>
                </Row>
              </Column>
              <Column className="mt-[4px] pb-[4px] pr-[4px] w-[17%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Product Links
                </Text>
                <Text className="font-normal lg:mt-[26px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Categories
                </Text>
                <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  New Arrival
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Features
                </Text>
                <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Collections
                </Text>
              </Column>
              <Column className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] pb-[4px] pr-[4px] w-[17%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Company
                </Text>
                <Text className="font-normal lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  About
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Blog
                </Text>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Careers
                </Text>
                <Text className="font-normal lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Services
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Privacy Policy
                </Text>
                <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  Terms of service
                </Text>
              </Column>
              <Column className="mt-[4px] w-[24%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700 w-[auto]">
                  Join our Newsletter
                </Text>
                <Text className="font-normal leading-[normal] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[87%]">
                  Drop your email below to get update, promotions, coupons, and
                  more!
                </Text>
                <Row className="bg-gray_800 border border-solid border-white_A700 items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[21px] w-[100%]">
                  <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100_87 tracking-ls1 w-[auto]">
                    Enter your email
                  </Text>
                  <Stack className="bg-white_A700 lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:px-[12px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[18px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]">
                    <Img
                      src="images/img_menu.svg"
                      className="absolute lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] inset-[0] justify-center m-[auto] w-[30%]"
                      alt="menu"
                    />
                  </Stack>
                </Row>
              </Column>
            </Row>
            <Text className="font-normal lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-bluegray_100 w-[auto]">
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default CategorieswithSidebarPage;
