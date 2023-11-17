
import { nanoid } from 'nanoid';
import type { Tag } from '~/types';

// TODO: Put this in some kind of graphql database or something
// TODO: Find a way to randomly generate colors using
// nanoid and whatever plugin i need
const tagTable: Array<Tag> = [
  {
    id: nanoid(),
    tagName: 'mini games',
    color: 0xf7931a
  }, {
    id: nanoid(),
    tagName: 'hardware',
    color: 0xb8001b
  }, {
    id: nanoid(),
    tagName: 'verilog',
    color: 0x15c61e
  }, {
    id: nanoid(),
    tagName: 'arduino',
    color: 0x15bdc6
  }, {
    id: nanoid(),
    tagName: 'reviews',
    color: 0xc615be
  }, {
    id: nanoid(),
    tagName: 'data science',
    color: 0xc61565
  }, {
    id: nanoid(),
    tagName: 'data',
    color: 0x7615c6
  }, {
    id: nanoid(),
    tagName: 'vhdl',
    color: 0x1b8753
  }, {
    id: nanoid(),
    tagName: 'college',
    color: 0x6bc3a5
  }, {
    id: nanoid(),
    tagName: 'college',
    color: 0x5a1467
  }
];

const __api__ = {
  'tags': tagTable
}


// TODO: '/api/tag/<nanoid-id>

export default defineEventHandler((event) => {
  return 'Hello tags'
})
