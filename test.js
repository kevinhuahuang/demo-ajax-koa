let strResponse = '5a 5a 5a ad 53 05 f6 01 00 14 05 00 00 00 00 00 b0 aa \n' +
    '5a 5a 5a ad 53 05 7a 01 00 14 06 00 00 00 08 00 5a 2d 44 56 31 2e 30 31 4c aa \n' +
    '5a 5a 5a ad 53 05 67 01 00 14 09 00 00 00 01 00 30 1c aa \n' +
    '5a 5a 5a ad 53 05 d5 01 00 14 08 00 00 00 06 00 00 00 16 01 01 00 8e aa \n' +
    '5a 5a 5a ad 53 05 78 01 00 14 00 00 00 00 0c 00 74 65 73 74 00 00 00 00 00 00 00 00 21 aa \n' +
    '5a 5a 5a ad 53 05 7e 01 01 14 00 00 00 00 0c 00 41 41 41 20 20 20 20 20 20 20 20 20 51 aa \n' +
    '5a 5a 5a ad 53 05 5c 01 02 14 00 00 00 00 0c 00 69 6e 32 00 00 00 00 00 00 00 00 00 24 aa \n' +
    '5a 5a 5a ad 53 05 b1 01 03 14 00 00 00 00 0c 00 69 6e 33 00 00 00 00 00 00 00 00 00 c9 aa \n' +
    '5a 5a 5a ad 53 05 47 01 04 14 00 00 00 00 0c 00 69 6e 34 00 00 00 00 00 00 00 00 00 3f aa \n' +
    '5a 5a 5a ad 53 05 a6 01 05 14 00 00 00 00 0c 00 4c 49 31 32 33 34 35 36 00 00 00 00 ee aa \n' +
    '5a 5a 5a ad 53 05 1c 01 06 14 00 00 00 00 0c 00 6c 69 6e 6b 49 00 00 00 00 00 00 00 1c aa \n' +
    '5a 5a 5a ad 53 05 df 01 07 14 00 00 00 00 0c 00 6c 69 6e 6b 4f 00 00 00 00 00 00 00 d8 aa \n' +
    '5a 5a 5a ad 53 05 d4 01 08 14 00 00 00 00 0c 00 4c 49 4f 31 32 33 61 62 63 00 00 00 89 aa \n' +
    '5a 5a 5a ad 53 05 4c 01 09 14 00 00 00 00 0c 00 4c 4f 31 32 33 34 35 36 00 00 00 00 0e aa \n' +
    '5a 5a 5a ad 53 05 e2 01 0a 14 00 00 00 00 0c 00 6e 6f 72 6d 61 6c 00 00 00 00 00 00 b4 aa \n' +
    '5a 5a 5a ad 53 05 07 01 0b 14 00 00 00 00 0c 00 6f 75 74 31 00 00 00 00 00 00 00 00 1c aa \n' +
    '5a 5a 5a ad 53 05 6b 01 0c 14 00 00 00 00 0c 00 6f 75 74 34 00 00 00 00 00 00 00 00 72 aa \n' +
    '5a 5a 5a ad 53 05 00 01 0d 14 00 00 00 00 0c 00 6f 75 74 38 00 00 00 00 00 00 00 00 14 aa \n' +
    '5a 5a 5a ad 53 05 71 01 0e 14 00 00 00 00 0c 00 62 75 74 74 6f 6e 73 65 6c 65 74 65 28 aa \n' +
    '5a 5a 5a ad 53 05 2b 01 0f 14 00 00 00 00 0c 00 65 6d 70 74 79 00 00 00 00 00 00 00 1e aa \n' +
    '5a 5a 5a ad 53 05 83 01 10 14 00 00 00 00 0c 00 6e 6f 63 6f 64 65 00 00 00 00 00 00 d0 aa \n' +
    '5a 5a 5a ad 53 05 4a 01 11 14 00 00 00 00 0c 00 73 74 75 64 69 6f 53 54 55 44 49 4f 14 aa \n' +
    '5a 5a 5a ad 53 05 d0 01 12 14 00 00 00 00 0c 00 6c 6f 63 6b 53 74 61 72 74 31 00 00 f7 aa \n' +
    '5a 5a 5a ad 53 05 78 01 13 14 00 00 00 00 0c 00 6c 6f 63 6b 53 74 61 72 74 32 00 00 5d aa \n' +
    '5a 5a 5a ad 53 05 73 01 14 14 00 00 00 00 0c 00 6c 6f 63 6b 52 61 6e 64 6f 6d 00 00 18 aa \n' +
    '5a 5a 5a ad 53 05 84 01 15 14 00 00 00 00 0c 00 6c 6f 63 6b 45 51 00 00 00 00 00 00 c1 aa \n' +
    '5a 5a 5a ad 53 05 98 01 16 14 00 00 00 00 0c 00 6c 6f 63 6b 58 6f 76 65 72 00 00 00 9c aa \n' +
    '5a 5a 5a ad 53 05 f9 01 17 14 00 00 00 00 0c 00 72 61 6e 64 6f 6d 00 00 00 00 00 00 ba aa \n' +
    '5a 5a 5a ad 53 05 56 01 18 14 00 00 00 00 0c 00 72 61 6e 64 6f 6d 31 00 00 00 00 00 2b aa \n' +
    '5a 5a 5a ad 53 05 bb 01 19 14 00 00 00 00 0c 00 31 32 33 32 35 33 32 33 34 35 34 33 ee aa \n' +
    '5a 5a 5a ad 53 05 3b 01 1a 14 00 00 00 00 0c 00 6b 77 6e 63 6b 67 6b 65 69 64 61 64 75 aa \n' +
    '5a 5a 5a ad 53 05 b0 01 1b 14 00 00 00 00 0c 00 32 33 64 73 34 35 33 66 67 68 38 35 a4 aa \n' +
    '5a 5a 5a ad 53 05 eb 01 1c 14 00 00 00 00 0c 00 61 73 32 33 34 33 74 65 34 35 74 72 ba aa \n' +
    '5a 5a 5a ad 53 05 57 01 1d 14 00 00 00 00 0c 00 73 61 64 66 32 33 34 32 31 33 34 32 16 aa \n' +
    '5a 5a 5a ad 53 05 c0 01 1e 14 00 00 00 00 0c 00 35 32 33 34 35 72 33 34 35 32 33 34 d1 aa \n' +
    '5a 5a 5a ad 53 05 93 01 00 14 02 00 00 00 30 00 20 20 20 20 20 20 20 44 45 53 41 4d 20 41 55 44 49 4f 20 20 20 20 20 20 20 20 20 53 50 45 41 4b 45 52 20 4d 41 4e 41 47 45 4d 45 4e 54 20 20 20 82 aa \n' +
    '5a 5a 5a ad 53 05 e2 01 00 14 03 00 00 00 01 00 00 a3 aa \n' +
    '5a 5a 5a ad 53 05 ad 01 00 a1 00 00 00 00 60 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 20 20 20 20 20 20 00 00 00 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 20 20 20 20 20 20 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 3a aa \n' +
    '5a 5a 5a ad 53 05 d6 01 00 03 00 00 00 00 a8 00 41 00 00 00 00 00 00 00 01 00 00 00 10 03 00 00 00 00 00 00 00 00 00 00 2b 00 00 00 1a 00 00 00 88 00 00 00 19 00 00 00 00 00 04 00 c2 01 19 60 00 00 00 00 c2 01 38 01 0d 00 f0 00 19 00 01 01 4f 00 00 00 19 00 01 02 36 00 53 00 19 00 11 01 5f 00 90 01 19 00 01 01 97 00 90 01 19 00 01 00 dc 00 6e 00 28 00 01 00 a8 00 c8 00 19 00 01 00 c0 00 c8 00 19 00 01 00 d8 00 c8 00 19 00 01 00 00 00 02 00 00 00 00 00 f0 00 02 00 00 00 00 00 6d 02 49 01 c2 01 38 15 bc 01 c2 01 38 bf 00 00 00 00 00 00 00 00 00 00 b2 aa \n' +
    '5a 5a 5a ad 53 05 2d 01 00 03 01 00 00 00 a8 00 42 00 00 00 00 00 00 00 01 00 00 00 f2 02 02 00 00 00 00 00 00 00 00 00 38 00 00 00 19 00 00 00 88 00 00 00 19 00 00 00 00 00 00 00 c2 01 38 01 00 00 00 00 c2 01 38 01 20 00 c8 00 43 00 01 00 39 00 c8 00 19 00 01 00 40 00 90 01 19 00 01 00 64 00 00 00 19 00 01 00 87 00 c8 00 19 00 01 00 ae 00 c8 00 19 00 01 00 a8 00 c8 00 19 00 01 00 c0 00 c8 00 19 00 01 00 d8 00 c8 00 19 00 01 00 00 00 02 00 00 00 00 00 f0 00 02 00 00 00 00 00 bd 02 6f 00 c2 01 38 47 58 02 c2 01 38 01 00 00 00 00 00 00 00 00 00 00 52 aa \n' +
    '5a 5a 5a ad 53 05 71 01 00 03 02 00 00 00 a8 00 43 00 00 00 00 00 00 00 01 00 00 00 f2 02 02 00 00 00 00 00 00 00 00 00 38 00 00 00 19 00 00 00 88 00 00 00 19 00 00 00 00 00 00 00 c2 01 38 01 00 00 00 00 c2 01 38 01 20 00 c8 00 43 00 01 00 39 00 c8 00 19 00 01 00 40 00 90 01 19 00 01 00 64 00 00 00 19 00 01 00 87 00 c8 00 19 00 01 00 ae 00 c8 00 19 00 01 00 a8 00 c8 00 19 00 01 00 c0 00 c8 00 19 00 01 00 d8 00 c8 00 19 00 01 00 00 00 02 00 00 00 00 00 f0 00 02 00 00 00 00 00 bd 02 6f 00 c2 01 38 47 58 02 c2 01 38 01 00 00 00 00 00 00 00 00 00 00 0c aa \n' +
    '5a 5a 5a ad 53 05 0d 01 00 03 03 00 00 00 a8 00 44 00 00 00 00 00 00 00 01 00 00 00 10 03 00 00 00 00 00 00 00 00 00 00 2b 00 00 00 1a 00 00 00 88 00 00 00 19 00 00 00 00 00 04 00 c2 01 19 60 00 00 00 00 c2 01 38 01 0d 00 f0 00 19 00 01 01 4f 00 00 00 19 00 01 02 36 00 53 00 19 00 11 01 5f 00 90 01 19 00 01 01 97 00 90 01 19 00 01 00 dc 00 6e 00 28 00 01 00 a8 00 c8 00 19 00 01 00 c0 00 c8 00 19 00 01 00 d8 00 c8 00 19 00 01 00 00 00 02 00 00 00 00 00 f0 00 02 00 00 00 00 00 6d 02 49 01 c2 01 38 15 bc 01 c2 01 38 bf 00 00 00 00 00 00 00 00 00 00 6f aa \n' +
    '5a 5a 5a ad 53 05 a5 01 00 04 00 00 00 00 88 00 31 00 00 00 00 00 00 00 01 00 15 00 58 02 00 00 58 02 00 00 00 00 00 00 01 00 00 00 00 00 00 00 1d 00 90 01 19 00 01 00 41 00 00 00 19 00 01 00 6a 00 90 01 19 00 01 00 b6 00 90 01 19 00 01 00 ca 00 00 00 19 00 01 00 8f 00 2c 01 19 00 01 00 a8 00 c8 00 19 00 00 00 c0 00 c8 00 19 00 01 00 d8 00 c8 00 19 00 01 00 18 00 02 00 00 00 00 00 ac 00 02 00 00 00 00 00 c5 00 c2 01 38 1a 00 00 f5 01 b8 01 38 00 00 00 a7 aa \n' +
    '5a 5a 5a ad 53 05 8c 01 00 04 01 00 00 00 88 00 32 00 00 00 00 00 00 00 01 00 00 00 20 03 01 00 58 00 00 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 c8 00 19 00 01 00 31 00 c8 00 19 00 01 00 65 00 90 01 19 00 01 00 8b 00 c8 00 19 00 01 00 c0 00 c8 00 19 00 01 00 ef 00 c8 00 19 00 01 00 a8 00 c8 00 19 00 00 00 c0 00 c8 00 19 00 01 00 d8 00 c8 00 19 00 01 00 00 00 02 00 00 00 00 00 f0 00 02 00 00 00 00 00 90 01 c2 01 38 01 00 00 58 02 c2 01 38 00 00 00 ec aa \n' +
    '5a 5a 5a ad 53 05 ac 01 00 04 02 00 00 00 88 00 33 00 00 00 00 00 00 00 01 00 00 00 20 03 02 00 58 00 00 00 00 00 00 00 01 00 00 00 00 00 00 00 00 00 c8 00 15 00 01 00 33 00 90 01 00 00 01 00 50 00 00 00 0f 00 01 00 74 00 81 01 14 00 01 00 c3 00 6e 00 14 00 01 00 b0 00 90 01 0f 00 01 00 a8 00 c8 00 19 00 00 00 c0 00 c8 00 19 00 01 00 d8 00 c8 00 19 00 01 00 00 00 02 00 00 00 00 00 b9 00 02 00 00 00 00 00 c1 00 c2 01 38 1a 00 00 ac 01 c2 01 38 00 00 00 c6 aa \n' +
    '5a 5a 5a ad 53 05 3f 01 00 04 03 00 00 00 88 00 34 00 00 00 00 00 00 00 01 00 00 00 20 03 03 00 58 00 00 00 00 00 00 00 01 00 00 00 00 00 00 00 1e 00 c8 00 19 00 01 00 31 00 c8 00 19 00 01 00 69 00 c8 00 19 00 01 00 94 00 c8 00 19 00 01 00 b9 00 c8 00 19 00 01 00 d9 00 c8 00 19 00 01 00 a8 00 c8 00 19 00 00 00 c0 00 c8 00 19 00 01 00 d8 00 c8 00 19 00 01 00 00 00 02 00 00 00 00 00 f0 00 02 00 00 00 00 00 90 01 c2 01 38 01 00 00 58 02 c2 01 38 00 00 00 42 aa \n' +
    '5a 5a 5a ad 53 05 1b 01 00 04 04 00 00 00 88 00 35 00 00 00 00 00 00 00 01 00 08 00 20 03 04 00 58 00 00 00 00 00 00 00 01 00 00 00 00 00 00 00 11 00 c6 00 19 00 01 00 28 00 50 01 19 00 01 01 4e 00 8b 00 19 00 01 00 7f 00 73 00 19 00 01 00 b2 00 41 01 19 00 01 00 df 00 73 00 19 00 01 00 a8 00 c8 00 19 00 00 00 c0 00 c8 00 19 00 01 00 d8 00 c8 00 19 00 01 00 00 00 02 00 00 00 00 00 f0 00 02 00 00 00 00 00 c1 00 c2 01 38 24 00 00 71 01 c2 01 38 00 00 00 ba aa \n' +
    '5a 5a 5a ad 53 05 16 01 00 04 05 00 00 00 88 00 36 00 00 00 00 00 00 00 01 00 00 00 20 03 05 00 58 00 00 00 00 00 00 00 01 01 00 00 00 00 00 00 1e 00 00 00 19 00 01 00 30 00 90 01 19 00 01 00 62 00 00 00 19 00 01 00 8d 00 90 01 19 00 01 00 bc 00 90 01 19 00 01 00 bb 00 00 00 19 00 01 00 a8 00 c8 00 19 00 00 00 c0 00 c8 00 19 00 01 00 d8 00 c8 00 19 00 01 00 00 00 02 00 00 00 00 00 f0 00 02 00 00 00 00 00 df 00 c2 01 38 29 00 00 b3 01 c2 01 38 00 00 00 03 aa \n' +
    '5a 5a 5a ad 53 05 9d 01 00 04 06 00 00 00 88 00 37 00 00 00 00 00 00 00 01 00 00 00 20 03 02 00 58 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 c8 00 15 00 01 00 33 00 90 01 00 00 01 00 50 00 00 00 0f 00 01 00 74 00 81 01 14 00 01 00 c3 00 6e 00 14 00 01 00 b0 00 90 01 0f 00 01 00 a8 00 c8 00 19 00 00 00 c0 00 c8 00 19 00 01 00 d8 00 c8 00 19 00 01 00 00 00 02 00 00 00 00 00 b9 00 02 00 00 00 00 00 c1 00 c2 01 38 1a 00 00 ac 01 c2 01 38 00 00 00 f6 aa \n' +
    '5a 5a 5a ad 53 05 b4 01 00 04 07 00 00 00 88 00 38 00 00 00 00 00 00 00 01 00 00 00 20 03 07 00 58 00 00 00 00 00 00 00 01 00 00 00 00 00 00 00 28 00 7e 01 19 00 01 00 41 00 00 00 19 00 01 00 6a 00 90 01 19 00 01 00 84 00 00 00 19 00 01 00 a8 00 00 00 19 00 01 00 c5 00 90 01 19 00 01 00 a8 00 c8 00 19 00 00 00 c0 00 c8 00 19 00 01 00 d8 00 c8 00 19 00 01 00 31 00 02 00 00 00 00 00 cc 00 02 00 00 00 00 00 90 01 c2 01 38 01 00 00 58 02 c2 01 38 00 00 00 ef aa \n' +
    '5a 5a 5a ad 53 05 7a 01 00 14 01 00 00 00 0c 00 00 00 00 00 00 00 00 00 00 00 00 00 34 aa \n' +
    '5a 5a 5a ad 53 05 25 01 00 14 01 00 00 00 0c 00 00 00 00 00 00 00 00 00 00 00 00 00 6b aa \n' +
    '5a 5a 5a ad 53 05 8b 01 00 14 01 00 00 00 0c 00 00 00 00 00 00 00 00 00 00 00 00 00 c5 aa \n' +
    '5a 5a 5a ad 53 05 a0 01 00 14 01 00 00 00 0c 00 00 00 00 00 00 00 00 00 00 00 00 00 ee aa \n' +
    '5a 5a 5a ad 53 05 68 01 00 14 01 00 00 00 0c 00 00 00 00 00 00 00 00 00 00 00 00 00 26 aa \n' +
    '5a 5a 5a ad 53 05 b5 01 00 14 01 00 00 00 0c 00 00 00 00 00 00 00 00 00 00 00 00 00 fb aa \n' +
    '5a 5a 5a ad 53 05 83 01 00 14 01 00 00 00 0c 00 00 00 00 00 00 00 00 00 00 00 00 00 cd aa \n' +
    '5a 5a 5a ad 53 05 be 01 00 14 01 00 00 00 0c 00 00 00 00 00 00 00 00 00 00 00 00 00 f0 aa \n' +
    '5a 5a 5a ad 53 05 9d 01 00 14 01 00 00 00 0c 00 00 00 00 00 00 00 00 00 00 00 00 00 d3 aa \n' +
    '5a 5a 5a ad 53 05 9c 01 00 14 01 00 00 00 0c 00 00 00 00 00 00 00 00 00 00 00 00 00 d2 aa '

let strRequest = '5a 5a 5a ad a2 05 f6 00 00 14 05 00 00 00 08 00 00 00 00 00 00 00 00 00 be aa' +
    '5a 5a 5a ad a2 05 7a 00 00 14 06 00 00 00 08 00 00 00 00 00 00 00 00 00 bd aa' +
    '5a 5a 5a ad a2 05 67 00 00 14 09 00 00 00 08 00 00 00 00 00 00 00 00 00 b2 aa' +
    '5a 5a 5a ad a2 05 d5 00 00 14 08 00 00 00 08 00 00 00 00 00 00 00 00 00 b3 aa' +
    '5a 5a 5a ad a2 05 78 00 00 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 bb aa' +
    '5a 5a 5a ad a2 05 7e 00 01 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 ba aa' +
    '5a 5a 5a ad a2 05 5c 00 02 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 b9 aa' +
    '5a 5a 5a ad a2 05 b1 00 03 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 b8 aa' +
    '5a 5a 5a ad a2 05 47 00 04 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 bf aa' +
    '5a 5a 5a ad a2 05 a6 00 05 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 be aa' +
    '5a 5a 5a ad a2 05 1c 00 06 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 bd aa' +
    '5a 5a 5a ad a2 05 df 00 07 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 bc aa' +
    '5a 5a 5a ad a2 05 d4 00 08 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 b3 aa' +
    '5a 5a 5a ad a2 05 4c 00 09 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 b2 aa' +
    '5a 5a 5a ad a2 05 e2 00 0a 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 b1 aa' +
    '5a 5a 5a ad a2 05 07 00 0b 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 b0 aa' +
    '5a 5a 5a ad a2 05 6b 00 0c 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 b7 aa' +
    '5a 5a 5a ad a2 05 00 00 0d 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 b6 aa' +
    '5a 5a 5a ad a2 05 71 00 0e 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 b5 aa' +
    '5a 5a 5a ad a2 05 2b 00 0f 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 b4 aa' +
    '5a 5a 5a ad a2 05 83 00 10 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 ab aa' +
    '5a 5a 5a ad a2 05 4a 00 11 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 aa aa' +
    '5a 5a 5a ad a2 05 d0 00 12 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 a9 aa' +
    '5a 5a 5a ad a2 05 78 00 13 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 a8 aa' +
    '5a 5a 5a ad a2 05 73 00 14 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 af aa' +
    '5a 5a 5a ad a2 05 84 00 15 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 ae aa' +
    '5a 5a 5a ad a2 05 98 00 16 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 ad aa' +
    '5a 5a 5a ad a2 05 f9 00 17 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 ac aa' +
    '5a 5a 5a ad a2 05 56 00 18 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 a3 aa' +
    '5a 5a 5a ad a2 05 bb 00 19 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 a2 aa' +
    '5a 5a 5a ad a2 05 3b 00 1a 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 a1 aa' +
    '5a 5a 5a ad a2 05 b0 00 1b 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 a0 aa' +
    '5a 5a 5a ad a2 05 eb 00 1c 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 a7 aa' +
    '5a 5a 5a ad a2 05 57 00 1d 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 a6 aa' +
    '5a 5a 5a ad a2 05 c0 00 1e 14 00 00 00 00 08 00 00 00 00 00 00 00 00 00 a5 aa' +
    '5a 5a 5a ad a2 05 93 00 00 14 02 00 00 00 08 00 00 00 00 00 00 00 00 00 b9 aa' +
    '5a 5a 5a ad a2 05 e2 00 00 14 03 00 00 00 08 00 00 00 00 00 00 00 00 00 b8 aa' +
    '5a 5a 5a ad a2 05 ad 00 00 a1 00 00 00 00 08 00 00 00 00 00 00 00 00 00 0e aa' +
    '5a 5a 5a ad a2 05 d6 00 00 03 00 00 00 00 08 00 00 00 00 00 00 00 00 00 ac aa' +
    '5a 5a 5a ad a2 05 2d 00 00 03 01 00 00 00 08 00 00 00 00 00 00 00 00 00 ad aa' +
    '5a 5a 5a ad a2 05 71 00 00 03 02 00 00 00 08 00 00 00 00 00 00 00 00 00 ae aa' +
    '5a 5a 5a ad a2 05 0d 00 00 03 03 00 00 00 08 00 00 00 00 00 00 00 00 00 af aa' +
    '5a 5a 5a ad a2 05 a5 00 00 04 00 00 00 00 08 00 00 00 00 00 00 00 00 00 ab aa' +
    '5a 5a 5a ad a2 05 8c 00 00 04 01 00 00 00 08 00 00 00 00 00 00 00 00 00 aa aa' +
    '5a 5a 5a ad a2 05 ac 00 00 04 02 00 00 00 08 00 00 00 00 00 00 00 00 00 a9 aa' +
    '5a 5a 5a ad a2 05 3f 00 00 04 03 00 00 00 08 00 00 00 00 00 00 00 00 00 a8 aa' +
    '5a 5a 5a ad a2 05 1b 00 00 04 04 00 00 00 08 00 00 00 00 00 00 00 00 00 af aa' +
    '5a 5a 5a ad a2 05 16 00 00 04 05 00 00 00 08 00 00 00 00 00 00 00 00 00 ae aa' +
    '5a 5a 5a ad a2 05 9d 00 00 04 06 00 00 00 08 00 00 00 00 00 00 00 00 00 ad aa' +
    '5a 5a 5a ad a2 05 b4 00 00 04 07 00 00 00 08 00 00 00 00 00 00 00 00 00 ac aa' +
    '5a 5a 5a ad a2 05 7a 00 00 14 01 00 00 00 08 00 00 00 00 00 00 00 00 00 ba aa'

let requestAry = strRequest.split('5a 5a 5a ad a2 05 ').filter(str => str.length > 0).map(str => str.split(' ').slice(2,5).join(''))
let responseAry = strResponse.split(' \n')

function getResponseText(req) {
    return responseAry[requestAry.findIndex(value => value === req)]
}

module.exports = {
    getResponseText
}