import { Container, Flex, Box, Button, Text, Image } from "@chakra-ui/react"
import { CheckIcon, MinusIcon, EditIcon, SearchIcon, HamburgerIcon } from "@chakra-ui/icons"
import styles from "../../styles/Home.module.css"
import Link from "next/link"
const Navbar = () => {
    return (
        <div>
            <Container zIndex={1} maxWidth="xxl" backgroundColor="white"
                borderBottom="1px" borderColor="grey" position="fixed">
                <Flex ml="20px" mr="20px  " justifyContent="space-between" flexWrap="nowrap">
                    <Box><Flex ml="10px">
                        <HamburgerIcon mt="15px" mr="10px" className={styles.menu}
                        h="30px" w="30px" />
                        <Text mt="19px" fontWeight="thin">Menu</Text>
                        </Flex></Box>
                    <Box>
                        <Link href="/" >
                            <Image src="/imgs/audiLogo.jpg" ml="10px" alt="audi logo" height="60px" width="80px"  />
                        </Link>
                    </Box>
                    <Box><Flex gap="20px" p="19px"><SearchIcon fontWeight="thin"  boxSize="1.3rem"
                        h="20px" w="20px" mt="4px" />
                        <Box borderRight="1px"></Box>
                        <Box borderRadius="50%;">
                            <Link href="/">
                                <Image borderRadius="100%" src="../imgs/pk.svg" alt="audi logo" height="30px" width="30px"   />
                            </Link>
                        </Box>
                    </Flex></Box>
                </Flex>
            </Container>
        </div>
    )
}
export default Navbar