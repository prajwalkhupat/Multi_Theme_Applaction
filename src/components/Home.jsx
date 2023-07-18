import React from 'react';
import{Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';


const headingOptions ={
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '3xl',
};


const Home = () => {
  return (
    // box is like a div
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
            textTransform={'uppercase'}
            py={'2'}
            w={'fit-content'}
            borderBottom={'2px'}
            m={'auto'}
        >
            Services
        </Heading>

        <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
        >
            <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
                letterSpacing={'widest'}
                lineHeight={'190%'}
                p={['4', '16']}
                textAlign={'center'}
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, sunt ipsa sit accusantium fugiat 
                doloremque accusamus illo possimus unde temporibus consequuntur necessitatibus perferendis hic eos 
                recusandae a alias molestias tempora? Eveniet, in. Delectus dignissimos nihil dolor ab quia quasi culpa facere saepe odit?
                Provident labore aperiam expedita commodi, minima cumque unde asperiores quisquam rem facilis dignissimos laudantium iusto.
                Beatae illo hic nostrum cumque eligendi sint repellat in quis odit itaque, expedita nihil reiciendis quam unde
                quo sed iure placeat consequuntur neque! Et dolores illum explicabo amet ipsum beatae, distinctio corporis tenetur 
                adipisci vitae doloribus veniam porro! Dolor non a excepturi.
          </Text>

        </Stack>
  
      </Container>
    </Box>
  )
};

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
    >
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch The Future 
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                Future is Gaming 
            </Heading>
        </Box>
        
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
                Gaming on Console 
            </Heading>
        </Box>
        
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
                Night Life is Cool 
            </Heading>
        </Box>
    </Carousel>
);



export default Home;
