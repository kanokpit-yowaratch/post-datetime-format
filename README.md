## Description

A simple utility library for show datetime format written in TypeScript.

## Installation

```bash
$ npm i @kanokpit.y/post-datetime-format
```

## How to use

```bash
# import
import postDateTimeFormat from '@kanokpit.y/post-datetime-format';
```

```bash
postDateTimeFormat('2024-11-06');
# output
6 พ.ย. 2567

postDateTimeFormat('2024-11-06 23:59:59', true);
# output
6 พ.ย. 2567 23:59

postDateTimeFormat('2024-11-06 23:59:59', true, 'Asia/Kolkata', 'IN-in');
# output
6 nov 2024, 22.29

postDateTimeFormat('2024-10-18T18:02:11.811Z', true);
# output
9 ต.ค. 2567 01:02
```

