import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button, Line, List, Stack } from "components";

const CartPage = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    navigate("/checkout");
  }

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
        <Row className="2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[12%]">
          <Text className="font-medium mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
            Home
          </Text>
          <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
            {">"}
          </Text>
          <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
            Shopping Cart
          </Text>
        </Row>
        <Column className="items-center lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] 2xl:px-[108px] 3xl:px-[129px] lg:px-[84px] xl:px-[96px] w-[100%]">
          <Text className="font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
            Shopping Cart
          </Text>
          <Row className="items-center lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] w-[98%]">
            <Text className="border-2 border-gray_800 border-solid flex font-medium items-center lg:px-[13px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[20px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              1
            </Text>
            <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
              Shopping Cart
            </Text>
            <Line className="bg-gray_800 h-[2px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] w-[24%]" />
            <Text className="border-2 border-bluegray_100 border-solid flex font-medium items-center lg:ml-[33px] xl:ml-[38px] 2xl:ml-[42px] 3xl:ml-[51px] lg:px-[12px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]">
              2
            </Text>
            <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]">
              Checkout
            </Text>
            <Line className="bg-bluegray_100 h-[2px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] w-[24%]" />
            <Text className="border-2 border-bluegray_100 border-solid flex font-medium items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:px-[11px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius50 lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]">
              3
            </Text>
            <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]">
              Completed
            </Text>
          </Row>
        </Column>
        <Row className="2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[67%]">
          <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
            Product
          </Text>
          <Text className="font-medium lg:ml-[344px] xl:ml-[393px] 2xl:ml-[442px] 3xl:ml-[531px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
            Quantity
          </Text>
          <Text className="font-medium lg:ml-[134px] xl:ml-[154px] 2xl:ml-[173px] 3xl:ml-[208px] mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
            Price
          </Text>
          <Text className="font-medium lg:ml-[135px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] mt-[4px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
            Total
          </Text>
        </Row>
        <Column className="items-center lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] 2xl:px-[108px] 3xl:px-[129px] lg:px-[84px] xl:px-[96px] w-[100%]">
          <List
            className="gap-[0] min-h-[auto] w-[100%]"
            orientation="vertical"
          >
            <Row className="items-center lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] w-[100%]">
              <Stack className="border border-bluegray_100 border-solid lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]">
                <Img
                  src="images/img_placeholder_5.png"
                  className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] inset-[0] justify-center m-[auto] lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px]"
                  alt="placeholder"
                />
              </Stack>
              <Text className="font-medium lg:ml-[38px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Gray T-shirt
              </Text>
              <Stack className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[145px] xl:ml-[166px] 2xl:ml-[187px] 3xl:ml-[225px] w-[10%]">
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
              <Text className="font-medium 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[81px] xl:ml-[92px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                $100.99
              </Text>
              <Text className="font-medium lg:ml-[108px] xl:ml-[124px] 2xl:ml-[139px] 3xl:ml-[167px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                $100.99
              </Text>
              <Img
                src="images/img_close.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] lg:ml-[149px] xl:ml-[171px] 2xl:ml-[192px] 3xl:ml-[231px] lg:w-[19px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px]"
                alt="close"
              />
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
            <Row className="items-center lg:my-[18px] xl:my-[21px] 2xl:my-[24px] 3xl:my-[28px] w-[100%]">
              <Stack className="border border-bluegray_100 border-solid lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]">
                <Img
                  src="images/img_rectangle39.png"
                  className="absolute lg:h-[105px] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] inset-[0] justify-center m-[auto] lg:w-[105px] xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px]"
                  alt="placeholder One"
                />
              </Stack>
              <Text className="font-medium lg:ml-[38px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                Red Flannel
              </Text>
              <Stack className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[148px] xl:ml-[170px] 2xl:ml-[191px] 3xl:ml-[229px] w-[10%]">
                <Button
                  className="absolute flex lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center right-[0] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                  size="mdIcn"
                  variant="icbFillGray800"
                >
                  <Img
                    src="images/img_grid.svg"
                    className="flex items-center justify-center lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                    alt="grid One"
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
              <Text className="font-medium 2xl:ml-[104px] 3xl:ml-[125px] lg:ml-[81px] xl:ml-[92px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                $100.99
              </Text>
              <Text className="font-medium lg:ml-[108px] xl:ml-[124px] 2xl:ml-[139px] 3xl:ml-[167px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                $100.99
              </Text>
              <Img
                src="images/img_close.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] lg:ml-[149px] xl:ml-[171px] 2xl:ml-[192px] 3xl:ml-[231px] lg:w-[19px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px]"
                alt="close One"
              />
            </Row>
          </List>
          <Row className="justify-between lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] w-[100%]">
            <Row className="border border-bluegray_100 border-solid items-center justify-between xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[9px] w-[28%]">
              <Text className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500_87 tracking-ls1 w-[auto]">
                Enter coupon code
              </Text>
              <Button
                className="font-normal not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[31%]"
                size="md"
                variant="FillGray800"
              >
                Apply Code
              </Button>
            </Row>
            <Column className="items-end mt-[4px] w-[9%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                Total
              </Text>
              <Text className="font-bold lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
                $202.00
              </Text>
            </Column>
          </Row>
        </Column>
        <Column className="items-end lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] 2xl:px-[108px] 3xl:px-[129px] lg:px-[84px] xl:px-[96px] w-[100%]">
          <Row className="items-center justify-end w-[25%]">
            <Button
              className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[50%]"
              size="sm"
              variant="OutlineGray800"
            >
              Continue Shopping
            </Button>
            <Button
              className="common-pointer font-medium lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center w-[42%]"
              onClick={handleNavigate7}
              size="sm"
              variant="FillGray800"
            >
              Checkout
            </Button>
          </Row>
        </Column>
        <Column className="items-center lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
          <footer className="bg-gray_800 w-[100%]">
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

export default CartPage;
