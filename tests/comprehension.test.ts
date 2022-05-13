import { assertPrint, assertTCFail, assertTC, assertFail } from "./asserts.test";
import { NUM, BOOL, NONE, CLASS } from "./helpers.test"

describe("List Comprehension Tests", () => {
//havent properly written next and hasnext yet
  assertTCFail("invalid expression in comprehension", `
class range(object):
    curr:int=0
    min:int=0
    max:int=10
    def __init__(self:range, min:int, max:int):
        self.curr=min
        self.min=min
        self.max=max
    def next(self:range)->int:
        return self.curr+1
    def hasNext(self:range)->bool:
        if self.curr<self.max:
            return True
        else:
            return False
print([j for a in range(1,2) if 1<2])
  `);


assertTCFail("invalid range in comprehension", `
class range(object):
    curr:int=0
    min:int=0
    max:int=10
    def __init__(self:range, min:int, max:int):
        self.curr=min
        self.min=min
        self.max=max
    def next(self:range)->int:
        return self.curr+1
    def hasNext(self:range)->bool:
        if self.curr<self.max:
            return True
        else:
            return False
print([j for a in range(2,1) if 1<2])
  `);
  
assertTCFail("Not if in comprehension", `
class range(object):
    curr:int=0
    min:int=0
    max:int=10
    def __init__(self:range, min:int, max:int):
        self.curr=min
        self.min=min
        self.max=max
    def next(self:range)->int:
        return self.curr+1
    def hasNext(self:range)->bool:
        if self.curr<self.max:
            return True
        else:
            return False
print([j for a in range(1,2) for 1<2])
`);
  
assertTCFail("invalid condition in comprehension", `
class range(object):
    curr:int=0
    min:int=0
    max:int=10
    def __init__(self:range, min:int, max:int):
        self.curr=min
        self.min=min
        self.max=max
    def next(self:range)->int:
        return self.curr+1
    def hasNext(self:range)->bool:
        if self.curr<self.max:
            return True
        else:
            return False
print([j for a in range(1,2) if 1+2])
  `);

assertTCFail("invalid iterable in comprehension", `
class range(object):
    curr:int=0
    min:int=0
    max:int=10
    def __init__(self:range, min:int, max:int):
        self.curr=min
        self.min=min
        self.max=max
    def next(self:range)->int:
        return self.curr+1
    def hasNext(self:range)->bool:
        if self.curr<self.max:
            return True
        else:
            return False
print([j for a in A if 1<2])
`);




});
