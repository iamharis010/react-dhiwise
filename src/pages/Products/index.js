import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  Button,
  Line,
  CheckBox,
  RatingBar,
  SelectBox,
  Grid,
  Slider,
} from "components";

const ProductsPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/productdetails");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

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
          <Row className="items-center w-[12%]">
            <Text className="font-medium mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
              Home
            </Text>
            <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-bluegray_100 w-[auto]">
              {">"}
            </Text>
            <Text className="font-medium mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
              Product List
            </Text>
          </Row>
        </Column>
        <Text className="font-bold lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-gray_800 w-[auto]">
          Product List
        </Text>
        <Row className="lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] w-[85%]">
          <Column className="lg:pr-[3px] 2xl:pr-[4px] xl:pr-[4px] 3xl:pr-[5px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[17%]">
            <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
              Categories
            </Text>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[90%]" />
            <Row className="items-center ml-[4px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[38%]">
              <Img
                src="images/img_vector_22X22.svg"
                className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                alt="Vector"
              />
              <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                Jacket
              </Text>
            </Row>
            <Row className="items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[31%]">
              <Img
                src="images/img_file.svg"
                className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[27%]"
                alt="file"
              />
              <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
                Shirt
              </Text>
            </Row>
            <Row className="items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[33%]">
              <Img
                src="images/img_upload.svg"
                className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[16%]"
                alt="upload"
              />
              <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                Pants
              </Text>
            </Row>
            <Row className="items-center ml-[4px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[36%]">
              <Img
                src="images/img_vector_16X22.svg"
                className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] w-[22%]"
                alt="Vector One"
              />
              <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                Shoes
              </Text>
            </Row>
            <Row className="items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[33%]">
              <Img
                src="images/img_ticket_22X16.svg"
                className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[18%]"
                alt="ticket"
              />
              <Text className="font-normal lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                Dress
              </Text>
            </Row>
            <Row className="items-center ml-[4px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[52%]">
              <Img
                src="images/img_signal_18X22.svg"
                className="lg:h-[11px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] w-[16%]"
                alt="signal"
              />
              <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] my-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                Accesories
              </Text>
            </Row>
            <Row className="xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[29%]">
              <Img
                src="images/img_television.svg"
                className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[23%]"
                alt="television"
              />
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                Skirt
              </Text>
            </Row>
            <Row className="items-center xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[48%]">
              <Img
                src="images/img_arrowdown_gray_500.svg"
                className="lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] w-[7%]"
                alt="arrowdown"
              />
              <Text className="font-normal lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                View more
              </Text>
            </Row>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[90%]" />
            <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
              Filter by Price
            </Text>
            <CheckBox
              className="font-normal lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500"
              inputClassName="h-[24px] mr-[5px] w-[24px]"
              name="AllPrice"
              label="All Price"
            ></CheckBox>
            <Row className="items-center lg:mt-[15px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[53%]">
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
              className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500"
              inputClassName="h-[24px] mr-[5px] w-[24px]"
              name="10001500"
              label="$1000 - $1.500"
            ></CheckBox>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[90%]" />
            <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 w-[auto]">
              Filter by Rating
            </Text>
            <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[24%]">
              <div className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
              <Img
                src="images/img_star1_3.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="StarOne"
              />
            </Row>
            <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[35%]">
              <div className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
              <Img
                src="images/img_star1_4.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="StarOne One"
              />
              <Img
                src="images/img_star2_2.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="StarTwo"
              />
            </Row>
            <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[47%]">
              <div className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
              <Img
                src="images/img_star1_5.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="StarOne Two"
              />
              <Img
                src="images/img_star2_3.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="StarTwo One"
              />
              <Img
                src="images/img_star3_1.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="StarThree"
              />
            </Row>
            <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[59%]">
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
                src="images/img_star1_6.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="StarOne Three"
              />
              <Img
                src="images/img_star2_4.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="StarTwo Two"
              />
              <Img
                src="images/img_star3_2.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="StarThree One"
              />
              <Img
                src="images/img_star5_24X24.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="StarFive"
              />
            </Row>
            <Row className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[71%]">
              <div className="border-bluegray_100 border-bw3 border-solid lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
              <RatingBar
                className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px]"
                value={5}
                starCount={5}
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1920}
              ></RatingBar>
            </Row>
          </Column>
          <Column className="items-center lg:pb-[11px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] w-[83%]">
            <Row className="justify-between lg:pr-[3px] 2xl:pr-[4px] xl:pr-[4px] 3xl:pr-[5px] lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] w-[100%]">
              <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                <span className="text-gray_500 font-poppins">Viewing </span>
                <span className="text-gray_800 font-poppins">20</span>
                <span className="text-gray_500 font-poppins"> of </span>
                <span className="text-gray_800 font-poppins">160</span>
                <span className="text-gray_500 font-poppins"> product</span>
              </Text>
              <SelectBox
                className="font-normal mr-[1px] mt-[1px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[17%]"
                placeholderClassName="text-gray_500"
                name="sort"
                placeholder="Sort by: Newest Items"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown.svg"
                    className="mr-[0] lg:w-[5px] lg:h-[4px] xl:w-[6px] xl:h-[5px] 2xl:w-[6px] 2xl:h-[5px] 3xl:w-[8px] 3xl:h-[6px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
            </Row>
            <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-5 lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_placeholder_4.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder"
                />
                <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[66%]">
                  Green <br />
                  Warm Jacket
                </Text>
                <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_rectangle39_1.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder One"
                />
                <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[66%]">
                  Black
                  <br />
                  Warm Jacket
                </Text>
                <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_placeholder_523X800.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder Two"
                />
                <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[66%]">
                  Blue Grey <br />
                  Warm Jacket
                </Text>
                <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_graytshirtis.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder Three"
                />
                <Text className="font-medium leading-[normal] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[55%]">
                  Blue Denim <br />
                  Jacket
                </Text>
                <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_placeholder_1.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder Four"
                />
                <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[66%]">
                  Purple <br />
                  Warm Jacket
                </Text>
                <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_placeholder_5.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder Five"
                />
                <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[45%]">
                  Casual <br />
                  Pink Shirt
                </Text>
                <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_rectangle39_245X245.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder Six"
                />
                <Text className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                  Gray T-shirt
                </Text>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_placeholder_2.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder Seven"
                />
                <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                  Red Flannel
                </Text>
                <Text className="font-medium lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_rectangle39_2.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder Eight"
                />
                <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[56%]">
                  Casual <br />
                  Grey Shoes
                </Text>
                <Text className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_pink3tz3pbb1.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder Nine"
                />
                <Text className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_800 w-[auto]">
                  Pink Jacket
                </Text>
                <Text className="font-medium lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_redcheckereds.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder Ten"
                />
                <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[66%]">
                  Black <br />
                  Warm Jacket
                </Text>
                <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_placeholder_137X139.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder Eleven"
                />
                <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[50%]">
                  Black
                  <br />
                  Brief Case
                </Text>
                <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_blackbusiness.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder Twelve"
                />
                <Text className="font-medium leading-[normal] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[76%]">
                  Modern Classic
                  <br />
                  Watch
                </Text>
                <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_placeholder.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder Thirteen"
                />
                <Text className="font-medium leading-[normal] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[55%]">
                  Blue Denim <br />
                  Skirt
                </Text>
                <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
              <Column className="items-center pb-[4px] w-[100%]">
                <Img
                  src="images/img_placeholder_400X521.png"
                  className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                  alt="placeholder Fourteen"
                />
                <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[71%]">
                  Casual <br />
                  Classic Watch
                </Text>
                <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                  $299
                </Text>
              </Column>
            </Grid>
            <Slider
              slidesToShow={5}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              items={[...Array(15)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Column className="items-center pb-[4px]">
                    <Img
                      src="images/img_placeholder_250X250.png"
                      className="lg:h-[143px] xl:h-[164px] 2xl:h-[184px] 3xl:h-[221px] lg:w-[142px] xl:w-[163px] 2xl:w-[183px] 3xl:w-[220px]"
                      alt="placeholder Fifteen"
                    />
                    <Text className="font-medium leading-[normal] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_800 w-[81%]">
                      Black Adventure
                      <br />
                      Boots
                    </Text>
                    <Text className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_500 w-[auto]">
                      $299
                    </Text>
                  </Column>
                </React.Fragment>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return <div className="" />;
                }
                return <div className="" role="button" tabIndex={0} />;
              }}
            />
            <Row className="items-center lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:px-[22px] xl:px-[26px] 2xl:px-[29px] 3xl:px-[35px] w-[21%]">
              <Button
                className="font-normal lg:h-[30px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center lg:w-[29px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                size="sm"
                variant="FillGray800"
              >
                1
              </Button>
              <Button
                className="font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
                size="sm"
                variant="OutlineGray500"
              >
                2
              </Button>
              <Button
                className="font-normal lg:h-[30px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-center lg:w-[29px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
                size="sm"
                variant="OutlineGray500"
              >
                3
              </Button>
            </Row>
            <Row className="items-center justify-center w-[21%]">
              <Img
                src="images/img_arrowleft.svg"
                className="cursor-pointer lg:h-[6px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] mb-[1px] w-[2%]"
                onClick={() => sliderRef.current?.slidePrev()}
                alt="arrowleft"
              />
              <Img
                src="images/img_arrowright_gray_500.svg"
                className="cursor-pointer lg:h-[6px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] lg:ml-[155px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[239px] mt-[1px] w-[2%]"
                onClick={() => sliderRef.current?.slideNext()}
                alt="arrowright"
              />
            </Row>
          </Column>
        </Row>
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

export default ProductsPage;
