import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Stack, Button, Line, List } from "components";

const ProductDetailsPage = () => {
  const navigate = useNavigate();

  function handleNavigate8() {
    navigate("/cart");
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
        <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[85%]">
          <Column className="items-center w-[51%]">
            <Img
              src="images/img_placeholder_523X800.png"
              className="lg:h-[306px] xl:h-[349px] 2xl:h-[393px] 3xl:h-[471px] w-[96%]"
              alt="placeholder"
            />
            <Row className="items-center justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[58%]">
              <Img
                src="images/img_placeholder_1.png"
                className="2xl:h-[103px] 3xl:h-[124px] lg:h-[80px] xl:h-[92px] w-[29%]"
                alt="placeholder One"
              />
              <Img
                src="images/img_placeholder_137X139.png"
                className="2xl:h-[103px] 3xl:h-[124px] lg:h-[80px] xl:h-[92px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[29%]"
                alt="placeholder Two"
              />
              <Img
                src="images/img_redcheckereds.png"
                className="2xl:h-[103px] 3xl:h-[124px] lg:h-[80px] xl:h-[92px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[29%]"
                alt="placeholder Three"
              />
            </Row>
          </Column>
          <Column className="pt-[4px] w-[49%]">
            <Row className="w-[39%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                Featured
              </Text>
              <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
                {">"}
              </Text>
              <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                Purple Warm Jacket
              </Text>
            </Row>
            <Text className="font-bold leading-[normal] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:text-[32px] xl:text-[37px] 2xl:text-[42px] 3xl:text-[50px] text-gray_800 w-[47%]">
              Purple Warm <br />
              Zip Jacket
            </Text>
            <Text className="font-normal lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] not-italic lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_500 w-[auto]">
              $299
            </Text>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
            <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[22px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[94%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Row className="items-center lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[34%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                Quantity
              </Text>
              <Stack className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[62%]">
                <Button
                  className="absolute flex lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center right-[0] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                  size="mdIcn"
                  variant="icbFillGray800"
                >
                  <Img
                    src="images/img_grid.svg"
                    className="flex items-center justify-center lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                    alt="grid"
                  />
                </Button>
                <Column className="absolute bg-gray_50 lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center left-[0] lg:px-[11px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]">
                  <div className="bg-gray_500 h-[2px] my-[3px] w-[90%]"></div>
                </Column>
                <Button
                  className="absolute font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[100%]"
                  size="sm"
                  variant="OutlineBluegray100"
                >
                  1
                </Button>
              </Stack>
            </Row>
            <Button
              className="2xl:mt-[42px] 3xl:mt-[50px] flex items-center justify-center lg:mt-[32px] text-center w-[31%] xl:mt-[37px]"
              onClick={handleNavigate8}
              rightIcon={
                <Img
                  src="images/img_cart.svg"
                  className="text-center lg:w-[14px] lg:ml-[10px] xl:w-[16px] xl:ml-[12px] 2xl:w-[18px] 2xl:ml-[13px] 3xl:w-[21px] 3xl:ml-[16px]"
                  alt="cart"
                />
              }
              size="lg"
              variant="FillGray800"
            >
              <div className="common-pointer bg-transparent font-bold lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                Add to Cart
              </div>
            </Button>
          </Column>
        </Row>
        <Row className="lg:mt-[106px] xl:mt-[122px] 2xl:mt-[137px] 3xl:mt-[164px] py-[3px] w-[85%]">
          <Text className="font-bold mt-[4px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
            Similiar Product
          </Text>
          <Text className="font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
            View all
          </Text>
          <Img
            src="images/img_button.svg"
            className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] 3xl:ml-[1009px] lg:ml-[653px] xl:ml-[747px] 2xl:ml-[841px] w-[7%]"
            alt="button"
          />
        </Row>
        <List
          className="xl:gap-[110px] 2xl:gap-[124px] 3xl:gap-[149px] lg:gap-[96px] grid grid-cols-4 min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[39px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] w-[85%]"
          orientation="horizontal"
        >
          <Column className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] pb-[4px] w-[100%]">
            <Img
              src="images/img_rectangle39_1.png"
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
              alt="placeholder Four"
            />
            <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Black Briefcase
            </Text>
            <Text className="font-medium lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] pb-[4px] w-[100%]">
            <Img
              src="images/img_placeholder_250X250.png"
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
              alt="placeholder Five"
            />
            <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Pink Shirt
            </Text>
            <Text className="font-medium lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] pb-[4px] w-[100%]">
            <Img
              src="images/img_placeholder_3.png"
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
              alt="placeholder Six"
            />
            <Text className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Gray T-shirt
            </Text>
            <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
          <Column className="items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[8px] xl:my-[9px] pb-[4px] w-[100%]">
            <Img
              src="images/img_placeholder_5.png"
              className="lg:h-[146px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[226px] lg:w-[145px] xl:w-[166px] 2xl:w-[187px] 3xl:w-[225px]"
              alt="placeholder Seven"
            />
            <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Red Flannel
            </Text>
            <Text className="font-medium lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              $299
            </Text>
          </Column>
        </List>
        <footer className="bg-gray_800 lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
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

export default ProductDetailsPage;
