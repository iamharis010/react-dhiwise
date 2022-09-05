import React from "react";

import { Column, Row, Img, Text, Button, Line, Stack } from "components";

const CompletedPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-poppins mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="w-[100%]">
            <Column className="items-center w-[100%]">
              <Row className="bg-white_A700 items-center justify-end lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
                <Img
                  src="images/img_volume.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[2%]"
                  alt="volume"
                />
                <Text className="cursor-pointer hover:font-bold font-bold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                  Elliye{" "}
                </Text>
                <Img
                  src="images/img_car.svg"
                  className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:ml-[316px] xl:ml-[362px] 2xl:ml-[407px] 3xl:ml-[488px] w-[4%]"
                  alt="car"
                />
                <Button
                  className="font-medium lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] 3xl:mr-[108px] lg:mr-[70px] xl:mr-[80px] 2xl:mr-[90px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[6%]"
                  size="sm"
                  variant="FillGray800"
                >
                  Login
                </Button>
              </Row>
              <Line className="bg-gray_50 h-[1px] w-[85%]" />
            </Column>
          </header>
        </Column>
        <Row className="2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[19%]">
          <Text className="font-medium mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
            Home
          </Text>
          <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
            {">"}
          </Text>
          <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
            Shopping Cart
          </Text>
          <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
            {">"}
          </Text>
          <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
            Checkout
          </Text>
        </Row>
        <Column className="items-center lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <Row className="items-center w-[84%]">
            <Text className="border-2 border-gray_800 border-solid flex font-medium items-center lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              1
            </Text>
            <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Shopping Cart
            </Text>
            <Line className="bg-gray_800 h-[2px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] w-[24%]" />
            <Text className="border-2 border-gray_800 border-solid flex font-medium items-center lg:ml-[33px] xl:ml-[38px] 2xl:ml-[42px] 3xl:ml-[51px] lg:px-[12px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              2
            </Text>
            <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Checkout
            </Text>
            <Line className="bg-gray_800 h-[2px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] w-[24%]" />
            <Text className="border-2 border-gray_800 border-solid flex font-medium items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              3
            </Text>
            <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Completed
            </Text>
          </Row>
          <Text className="font-bold lg:mt-[129px] xl:mt-[148px] 2xl:mt-[166px] 3xl:mt-[199px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-gray_800 w-[auto]">
            Checkout Complete!
          </Text>
          <Text className="font-normal lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center text-gray_800 w-[33%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </Text>
          <Button
            className="font-medium lg:mt-[40px] xl:mt-[46px] 2xl:mt-[51px] 3xl:mt-[62px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[13%]"
            size="md"
            variant="FillGray800"
          >
            Go Shopping Again
          </Button>
          <footer className="bg-gray_800 lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] w-[100%]">
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
                    Drop your email below to get update, promotions, coupons,
                    and more!
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
      </Column>
    </>
  );
};

export default CompletedPage;
