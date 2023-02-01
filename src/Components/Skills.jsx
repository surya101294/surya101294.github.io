import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem, Heading, Box, Center } from '@chakra-ui/react'
const Skills = () => {
  return (
    <Box style={{ width: '95%', margin: 'auto' }} id='skillpage' boxShadow={'2xl'} >
      <Heading fontSize={{ base: '3xl', md: '5xl', lg: '7xl' }} _hover={{ transform: 'scale(1.05)', }} fontFamily={'lorum'}>SKILLS</Heading>
      <hr />
      <br /> <br />
      <Center>
      <Wrap margin='auto' width={'95%'}>
        <WrapItem>
          {/* <Avatar size='2xl' name='Dan Abrahmov' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgEebD_4C0mQ8UuPnpJsEzbWXwWLs9avo3AKCSOOYvdhpD4-kTkcx2fmV7sAaKitIcFo&usqp=CAU' /> */}
          <Avatar size='2xl' _hover={{ bg: 'white', size: '3xl', paddingBottom: '10px', transform: 'scale(1.05)' }} name='D' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhdFgKwWT0BD32WAPhBz04H7yjV1VMu7axw&usqp=CAU'
          />
        </WrapItem>
        <WrapItem>
          <Avatar size='2xl' _hover={{ bg: 'white', size: '3xl', paddingBottom: '10px', transform: 'scale(1.05)' }} name='Ko' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TLdbAqtzJd2i6o0TLdIxnQUzhKNKb58koA&usqp=CAU'}
          />
        </WrapItem>
        <WrapItem>
          <Avatar size='2xl' _hover={{ bg: 'white', size: '3xl', paddingBottom: '10px', transform: 'scale(1.05)' }} name='Kent Dodds' src={'data:image/png;base64,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'} />
        </WrapItem>
        <WrapItem>
          <Avatar size='2xl' _hover={{ bg: 'white', size: '3xl', paddingBottom: '10px', transform: 'scale(1.05)' }} name='Ryan Florence' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'}
          />
          <WrapItem>
            <Avatar size='2xl' _hover={{ bg: 'white', size: '3xl', paddingBottom: '10px', transform: 'scale(1.05)' }} name='Prosper Otemuyiwa' src={'data:image/png;base64,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'}
            />
          </WrapItem>
        </WrapItem>
        <WrapItem>
          {/* <Avatar size='2xl'  name='Prosper Otemuyiwa' src={'data:image/png;base64,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'}
                 /> */}
          <Avatar size='2xl' _hover={{ bg: 'white', size: '3xl', paddingBottom: '10px', transform: 'scale(1.05)' }} name='Prosper Otemuyiwa' src={'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'} />

        </WrapItem>
        <WrapItem>
          <Avatar size='2xl' _hover={{ bg: 'white', size: '3xl', paddingBottom: '10px', transform: 'scale(1.05)' }} name='Prosper Otemuyiwa' src={'data:image/jpeg;base64,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'}
          />
        </WrapItem>
        <WrapItem>
          <Avatar size='2xl' _hover={{ bg: 'white', size: '3xl', paddingBottom: '10px', transform: 'scale(1.05)' }} name='Prosper Otemuyiwa' src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAA9lBMVEX///8zMzM+hj0oKCiNjY0uLi51rGRfmlorKyt2rmNxqGF3sGJtpV9dmVfF2MR5s2FnnmJ4tV94eHh2tlxlnlp0uFgUFBQiIiJzuVWzs7Pw8PDZ5di2zrRrv0dal1LR4NBKjUZvvE6qqqoPDw8bGxvk5OQAAABXV1dEREROTk7Ozs7s8usrfimvyq1qamqYmJhXnUubvZjCwsLa2tqbvZns7OxxcXGjo6NWmE2GsIKqyqZvo2pYokmFhYXy9vF7qnecwpJop1K617HT5s2HwXGk0ZRiuzlswkZjrkpOk0RPmUEzgjBQoD+rz6VRpzzG4cElfx+Ns4xY5WKcAAAIh0lEQVR4nO2ca1viOBSAe7FbxrVMV1kYLRaVKmhlREQFcWCci5dxdlf+/5/ZJC29pEkbZkaJw3m/+EhraV6S9CTnoKIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr4O9dm/Rt/BKuNC91tmib+JVsF5SjebF1qJv4xWATKlqqXmy6PuQH2JKVfXa5qLvRHZCU6rqtY8WfS9yE5lSjQNQlUdsStVXFn0zUgOmRAFTooApUcCUKGBKFDAlCpgSBUyJAqZEAVOigClRwJQoYEoUMCUKmBLlNzG1tX4wx56t8/F0LH7tzT2SkBEztXK4J37lBXBZ1VWj+v5c6OTxx5s3qw8dwUv3VK/m4daLmNr0dEPmbfaeWiMNEEsxfdp4++aPPyquWRY4eb9VNdQgyXBRaOqo7eGjwh/ZS7Pf8oyoCXpRiunzxsbbP5GpVdMcTPyia39ohpdGPSUWxTa19b46u49SVcaJLGpMgNfOy4j7X+43/gpMrZlm5eE099J7TT2+cPJdWKZODkrJM2qyFTHseYnGBC3KyYh/3X7398zUasWsVNxBnXvpo3ZN5ZA11dPpk71DmYoY2I0pVdnT1afb7XcJU7hTIVd2g3nyeTyWik2dHXrZk4zmuixFDPvcxtSM7HT1efd2dzdham2tQlRVmNPVSrPEvjTD1NZ6k30funf5bI2fh9zG0H1//OV2e5syhToVUVUZ0NPVpk6P6RxTl5kJIPGRqYuPGDZz7g+T7vtfb++2s6bCToXHYDJiOGszxhLP1CxC4d1GtbXgiOGkWdAY1BxjdvK4izoUw1TUqVC3GkWX5o0lpqnik0sHi30Ktgpbo6rV/fDkzs4u21QlUrV27IQn94o/g9jU1kHxyaXWAvzEiJjyYlODO7apaPy5kanN3NFEm6oWn2xIZkr3avRLCVPuPddUoErLMVXKzIg5pnSPvg25TKEV335mbo1NPbgux5QVqHL5ptCjYYWejLimUFxwRMdWMpkymsGSlHpeJ0wN3Ps7pqlQlcY1RcKNcJ1cZCp83m6m43WJTJWibY6t9eTnGZm6ehgMXHafqrjY1A7PVK0UhrDpDss2FcdwJ8lOKI8p4zDx+l6iQSlTg+s7timsSuOY0hPLostEf2WaqpEtvPIQR/znh9H9GfJECbXkJuN54tZjU9+6SBWnT7mWucMxlfoMlPfxWzJNeeh3Z2TZLt5PXZl59Q73lYXCM5W89WrCVLc7uOaYci0NqXosNsXYyaNM+Ts2whxFpqLRuzhE+lTaVHewyza1Q/g1pixsyp6EpqQo8/8BU92H7Rc1Jckm8Xymvl9fI1Ha/bObcokpMvpkSTzMZeofZOq6i6ZtNPye1ZRyilSZVhlFFQeyJLPmN4VEaddsU5qYKYFnn+JP3P7ztnxe5jb1DZvSOH1KY5tS9cSe5V5RPGUEw22OlOuLMLcpIkq75prS2DG6GoaNR6ndPXaMLskUTjGfqX/vgy6laRxTGscU3rPcz6YfeCvkUlO+PN+cpr6HorQux5TGMYWXvSsnVWrHnr/rUpyafWnmNPUwM6XNbQq3PvNKzk5efmr25eGuZhJ7uwlTkSjtgWPq1+15Gs0LmaarVmKtnvoM23EHiEz99xSb0m7Ypp5mSb+ewIZvLVqlMDOOUqxiZkSmalQonEhTRqaUztNjrIpl6vExTmPlJY8DvHZ08hk7iSXBynhGaEr3sqFwlPqOTSnjSdytbrKR51MqWjzKT+HpXspCtjIisClLWQIxVWp+YB7sGTXKlKI41vFMFW3qcUJHizlpYUYg8IGZzJblfysgU0Gow4Y816vpw/XHcAgOUqYeTCf797xSA3ZwSW+zh1TXf7qZv4BWKT/lj5tapUX2w+kqYWrAKws6azFS7tz37GWLbvI+yJdkvXCtfnZ4kHnNn5AhOIhM5ZWa9UpU6/VqznvS05Usmy4/TGMHuwpNFZUvniQnoMJyqOR0Rc36r5PO8aO2g01V1qgas3qfHomJ0k2veCxF05UuZZnnDzB9elxbXbuhtJRNDF1PHGaEa4ZQKorUCEpUi/fT+KPjm4/pyMCZWLZpmbY1oZ+Em7WaLh5z73nN3+ufVDnpCWo8dW3bvfKv8I9pJro6maePSPHAey46LupMJPfrD3HXEv36w7LRsE3bHM1m98YI/capJ15ufDJBJWf3OpmuCr/+sGzgtJNLfzGrj1+ULMWyYHjdh+poDcbKcKkgExRnSgqOEUON+tjP/37N707HtU2X/5jDD0RyuOOcDpVlfhyOXdvKhE6pE6aW7Y4Vx3H6p0ttqmGZ/O9hBdRNq6GMyw1nqly9yD3JSSOxyHOcoHM1OtPp9LQ+m8DL2BQafYp/JVsO/SVJmHIGZEJCYsgq2XRHweMwMIX81ZdZVMoUGYh1NMNbyJVr2faAdKvQ1LKTMYVE9UlfciakWAxMhdCmGpY9nB1DITp2BqYItKmyaUbxZccd4GNgikCbctDo68yeej4ZhmCKkJmn8HaL5drDq3I6Slh6MqbGQ7R+wYX36AkY7C6AKULGFPrZGdouChSQLZjRYximCL5TxrvqEwVMhdCm+qfx3p2D1sYKmAqhTaERF69ZXDAVQ5s6Nc1+fMy2FTAVQpvyUTw1KTu+7zeuLJtsDYMpAmuFjJfIeJFsW1P8OpgiZJ99/tANtl1cOzgCpgjMKMEp1zv1xixZA6YI+Lt4oSqHvVFcDrcUlp5hVNmCulfWFK5+sYaZl5cSkiqe+oo/sjOjLKh+WeaMTApc2WJbeDfYoo500OLPHcLQi3FGwXo43aWC6pdlT7HTNPrD4VWq82SrX4AE45msMRS65OH0rXD2huKpfJyw6iWv+gUIIH3JhiJPAca4Oo9ROAxkcYajIUQGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8vA/HBUnrwruDs4AAAAASUVORK5CYII='}
          />
        </WrapItem>
      </Wrap>
      </Center>
      <br /> <br />
      {/* <Stack direction='row'>
  <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
  <Avatar name='Sasuke Uchiha' src='https://bit.ly/broken-link' />
  <Avatar src='https://bit.ly/broken-link' />
</Stack> */}
    </Box>
  )
}

export default Skills

// chakara img
// https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg