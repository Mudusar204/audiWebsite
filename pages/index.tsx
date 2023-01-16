import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'
import { Container, Flex, Box, Button, Text, Center, background, Card, CardBody, Heading, calc } from "@chakra-ui/react"
import { url } from 'inspector'


export default function Home() {
  return (
    <>
      <Navbar />
      <Box className={styles.mianContainerParent}>

        <Center className={styles.mainContainer} backgroundImage={('/imgs/mainImg.jpg')} backgroundPosition='' backgroundSize='contain'
          backgroundRepeat='no-repeat' height='420px'>
          <Box className={styles.Box}>
            <Text color='white' fontSize='5xl' className={styles.mainText}>Our idea of the perfect sleigh</Text>
            <Text color='white' textAlign='center' fontSize='2xl'>
              Experience the premium mobility of tomorrow with Audi</Text>
            <Text textAlign='center' mt='30px'>
              <Button className={styles.mainSectionButton} p='30px 60px' borderRadius='0' color='white' border='1px' borderColor='white'
                _hover={{ textShadow: '20px', backgroundColor: 'transparent' }} backgroundColor='transparent' >Read More</Button>
            </Text>
          </Box>
        </Center>
      </Box>
      <Box mt='90px' >
        <Text textAlign='center' fontWeight='medium' fontSize='12px'>The vehicle shown is a concept vehicle that is not available as a production vehicle.</Text>
      </Box>

      {/* card Section...................1///////////////////////////////////////////////////////  */}
      <Container maxW='container.xl' className={styles.cardSection1}>
        <Text mt='70px' mb='50px' textAlign='center' fontSize='4xl' fontWeight='normal'>Current topics from the world of Audi</Text>
        <Flex flexWrap='wrap' >
          <Box maxW='33%' className={styles.cardItem1}>
            {/* <CardBody> */}
            <Image src='/imgs/cardImg1.jpg'
              height={405}
              width={405}
              alt='card item1 Images'
            />
            <Text color='gray' mt='10px'>Working world ---- 11/13/2022</Text>
            <Heading size='md' fontWeight='medium'>Audi Charging Hub: flexibel, sustainable and convient</Heading>
            <Text>In addition to Nuremberg and Zurick, Audi
              charging hub fast charging stations are planned in
              central locations in  Salzburg, Berlin and Munich.
              They offer susutainable power wtorage and top service
              features.
            </Text>
            {/* </CardBody> */}
          </Box>
          <Box maxW='33%' className={styles.cardItem2}>
            {/* <CardBody>/ */}
            <Image src='/imgs/cardImg2.jpg'
              height={405}
              width={405}
              alt='card item1 Images'
            />
            <Text color='gray' mt='10px'>Sustainability ---- 10/28/2022</Text>
            <Heading size='md' fontWeight='medium'>Assessment of the third quarter of 2022</Heading>
            <Text>The Audi Group continues to be successful in
              a challenging market environment . During the first three quarters of 2022 the Premium brand
              group increased its revenue, operating profit and operating return on sales.
            </Text>
            {/* </CardBody> */}
          </Box>
          <Box maxW='33%' className={styles.cardItem3}>
            {/* <CardBody> */}
            <Image src='/imgs/cardImg3.jpg'
              height={405}
              width={405}
              alt='card item3 Images'
            />
            <Text color='gray' mt='10px'>Working world ---- 10/12/2022</Text>
            <Heading size='md' fontWeight='medium'>Audi Employees Develop New Key Competencies</Heading>
            <Text>Further training is crucial for Audi's
              transformation, such as imparting expertise
              in and key competencies for high voltage storage systems.
            </Text>
            {/* </CardBody> */}
          </Box>
        </Flex>
      </Container>
      {/* aside section 1................////////////////////1/////////////////////////////////////////// */}
      <Container maxW='container.xl'>
        <Flex justifyContent='space-between' alignItems='center' mt='90px ' flexWrap='wrap-reverse'>
          <Box w='40%' className={styles.asideItemText}>
            <Heading size='lg' fontWeight='normal' mb='30px'> Full electric speed ahead</Heading>
            <Text>Audi recently underpinned its clear course toward electromobility with strong figures
              and important milestones. How the Four Rings are
              progressing on their path to successful electrification.</Text>
            <Button mt='30px' className={styles.mainSectionButton} p='30px 100px' borderRadius='0' color='black' border='1px' borderColor='black'
              _hover={{ textShadow: '20px', backgroundColor: 'transparent' }} backgroundColor='transparent' >Read More</Button>
            <Text mt='20px'>¹The vehicle shown is a concept vehicle that is not available as a production vehicle</Text>
          </Box>
          <Box>
            <Image src='/imgs/mainImg1.jpg' alt='side img 1' width={690} height={650} />
          </Box>
        </Flex>
      </Container>
      {/* aside section 2................////////////////////2/////////////////////////////////////////// */}
      <Container maxW='container.xl'>
        <Flex justifyContent='space-between' alignItems='center' mt='170px ' flexWrap='wrap-reverse'>
          <Box>
            <Image src='/imgs/mainImg2.jpg' alt='side img 1' width={690} height={650} />
          </Box>
          <Box w='40%'>
            <Heading size='lg' fontWeight='normal' mb='30px'> Audi Career: We are progress. With you.</Heading>
            <Text>Progress is what you bring with you. At Audi we want to offer you the freedom to use and
              develop this progress. With flexible working hours. With an in-house further education academy.
              With projects which combine 100 years of experience in premium mobility with an electrified future.
              For a world that we keep on the move together – with you.

            </Text>
            <Button mt='30px' className={styles.mainSectionButton} p='30px 100px' borderRadius='0' color='black' border='1px' borderColor='black'
              _hover={{ textShadow: '20px', backgroundColor: 'transparent' }} backgroundColor='transparent' >Read More</Button>
          </Box>
        </Flex>
      </Container>
      {/* card section ............2///////////////////////////////////////////////////////////////// */}
      <Container maxW='container.xl' mb='30px' className={styles.cardSection1}>
        <Text mt='70px' mb='50px' textAlign='center' fontSize='4xl' fontWeight='normal'>Press release</Text>
        <Flex flexWrap='wrap' >
          <Box maxW='33%' className={styles.cardItem1}>
            {/* <CardBody> */}
            <Image src='/imgs/cardImg4.jpg'
              height={405}
              width={405}
              alt='card item4 Images'
            />
            <Text color='gray' mt='10px'>Working world ---- 11/13/2022</Text>
            <Heading size='md' fontWeight='medium'>Reinventing the wheel? 'FeIGAN' inspires new rim designs with AI</Heading>
            <Text>To the press release
            </Text>
            {/* </CardBody> */}
          </Box>
          <Box maxW='33%' className={styles.cardItem2}>
            {/* <CardBody>/ */}
            <Image src='/imgs/cardImg5.jpg'
              height={405}
              width={405}
              alt='card item5 Images'
            />
            <Text color='gray' mt='10px'>Sustainability ---- 10/28/2022</Text>
            <Heading size='md' fontWeight='medium'>Audi already part of virual Foumula 1</Heading>
            <Text>To the press release
            </Text>
            {/* </CardBody> */}
          </Box>
          <Box maxW='33%' className={styles.cardItem3}>
            {/* <CardBody> */}
            <Image src='/imgs/cardImg6.jpg'
              height={405}
              width={405}
              alt='card item6 Images'
            />
            <Text color='gray' mt='10px'>Working world ---- 10/12/2022</Text>
            <Heading size='md' fontWeight='medium'>New Audi charging service: understricted mobility in 27 European countries</Heading>
            <Text>To the press release
            </Text>
            {/* </CardBody> */}
          </Box>
        </Flex>
      </Container>
      {/* card section ............3///////////////////////////////////////////////////////////////// */}
      <Container maxW='container.xl' mb='90px'>
        <Flex justifyContent='space-between' alignItems='center' mt='170px ' flexWrap='wrap-reverse'>
          <Box>
            <Image src='/imgs/mainImg3.jpg' alt='side img 1' width={690} height={650} />
          </Box>
          <Box w='40%'>
            <Heading size='lg' fontWeight='normal' mb='20px' mt='20px'> At Audi you’ll find the right vehicle for every requirement</Heading>
            <Text>
              Sporty, luxurious, or compact –
              at Audi you will find the right vehicle for every requirement. Discover and configure our series models now.
            </Text>
            <Button mt='30px' className={styles.mainSectionButton} p='30px 100px' borderRadius='0' color='black' border='1px' borderColor='black'
              _hover={{ textShadow: '20px', backgroundColor: 'transparent' }} backgroundColor='transparent' >Discover All Models</Button>
            <Text mt='20px'>Audi Q4 Sportback e-tro
              n:Power consumption (combined*) in kWh/100 km: 19.7–16.1CO₂ emissions (combined*) in g/km: 0</Text>
            <Text mt='10px'>Information on fuel/power consumption and CO
              ₂ emissions with ranges depending on the selected equipment of the vehicle.</Text>
            <Text mt='10px'>Only consumption and emission
              values according to WLTP and not according to NEDC are available for the vehicle.</Text>
          </Box>
        </Flex>
      </Container>
      {/* footer..................///////////////////////////////footer///////////////////////////////////////footer */}
      <footer>
        <Container maxW='container.xxl' bg='black'>
          <Container maxW='container.xl' bg='' color='white' >
            <Flex justifyContent='flex-end' pt='30px' pb='20px'>
              <li className={styles.list}><Image src='/imgs/fbImg.png' height={30} width={30} alt='fb link' /></li>
              <li className={styles.list}><Image src='/imgs/instaImg.png' height={30} width={30} alt='fb link' /></li>
              <li className={styles.list}><Image src='/imgs/linkedinImg.png' height={30} width={30} alt='fb link' /></li>
              <li className={styles.list}><Image src='/imgs/twitterImg.png' height={30} width={30} alt='fb link' /></li>
              <li className={styles.list}><Image src='/imgs/youTubeImg.png' height={30} width={30} alt='fb link' /></li>
            </Flex>
            <Flex justifyContent='space-between'>
              <ul className={styles.footerList1}>
                <li> <Heading size='md' fontWeight='medium' ml='15px' mb='30px'>Topics</Heading></li>
                <li><Button backgroundColor='transparent' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>company</Button></li>
                <li><Button backgroundColor='transparent' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>innovation</Button></li>
                <li><Button backgroundColor='transparent' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Models</Button></li>
                <li><Button backgroundColor='transparent' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Brand</Button></li>
                <li><Button backgroundColor='transparent' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Career</Button></li>
              </ul>
              <ul className={styles.footerList2}>
                <li><Heading size='md' fontWeight='medium' ml='15px' mb='30px'>Audi AG</Heading></li>
                <li><Button backgroundColor='transparent' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Audi Report 2021</Button></li>
                <li><Button backgroundColor='transparent' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Documents & Policies</Button></li>
                <li><Button backgroundColor='transparent' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Financial Celnder</Button></li>
                <li><Button backgroundColor='transparent' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Profile</Button></li>
              </ul>
              <ul className={styles.footerList3}>
                <li><Heading size='md' fontWeight='medium' ml='15px' mb='30px'>Services</Heading></li>
                <li><Button backgroundColor='transparent' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>muAudi</Button></li>
                <li><Button backgroundColor='transparent' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Press</Button></li>
                <li><Button backgroundColor='transparent' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Contact</Button></li>
                <li><Button backgroundColor='transparent' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Job Portal</Button></li>
              </ul>
              <ul className={styles.footerList4}></ul>
            </Flex>
            <Container maxW='container.xl' borderBottom='1px' borderColor='grey' mb='20px' mt='50px'></Container>
            <Flex justifyContent='space-between' flexWrap='wrap'>
              <Flex alignItems='center' flexWrap='wrap'>
                <Text fontSize='sm' mr='60px'>
                  © AUDI AG. All rights reserved
                </Text>
                <Button backgroundColor='transparent' fontSize='sm' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Legal notice </Button>
                <Button backgroundColor='transparent' fontSize='sm' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Legal </Button>
                <Button backgroundColor='transparent' fontSize='sm' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Privacy Policy </Button>
                <Button backgroundColor='transparent' fontSize='sm' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Cookie Policy</Button>
                <Button backgroundColor='transparent' fontSize='sm' _hover={{ color: 'grey', textShadow: '20px', backgroundColor: 'transparent' }}>Cookie Consent Options
                </Button>
              </Flex>
              <Flex gap='20px' mr='40px' alignItems='center'>
                <Image src='/imgs/us.svg' alt='footer wali img' height={30} width={30} />
                <Text>English</Text>
              </Flex>
            </Flex>
            <Box>
              <Text mt='50px' fontSize='sm'>* The stated consumption and emissions values were determined in accordance with the legally
                stipulated measurement procedure. The WLTP test cycle completely replaced the NEDC test cycle with effect from 1 January 2022
                . As a result, no NEDC values are available for vehicles with a type approval issued after this date.</Text>
              <Text mt='20px' fontSize='sm'>The values do not refer to an individual vehicle and are not part of the offer; instead, they are solely
                for the purpose of comparing between different types of vehicles. Optional equipment and accessories
                (attachments, tyre formats etc.) may alter relevant vehicle parameters such as the weight, rolling
                resistance and aerodynamics and, alongside weather and traffic conditions and individual driving behaviour,
                may influence the fuel
                consumption, electricity consumption, CO2 emissions and performance values of a vehicle.</Text>
              <Text mt='20px' fontSize='sm'>Due to the more realistic test conditions, fuel consumption and CO2 emissions values will in many cases
                be higher in accordance with the WLTP than in accordance with the NEDC. There may have been corresponding
                changes to vehicle taxation since 1 September 2018 as a result of this.
                You can find further information on the differences between the WLTP and the NEDC at http://www.audi.co.uk/wltp.</Text>
              <Text mt='50px' pb='50px' fontSize='sm'>Further information on the official fuel consumption and the official, specific CO2 emissions of new
                passenger car models can be found in the “Guide on the fuel economy, CO2 emissions and power consumption of
                all new passenger car models”, available free of charge from all sales outlets
                and from DAT Deutsche Automobil Treuhand GmbH, Hellmuth-Hirth-Str. 1, 73760 Ostfildern, Germany or at www.dat.de.</Text>
            </Box>
          </Container>
        </Container>
      </footer>
    </>
  )
}
