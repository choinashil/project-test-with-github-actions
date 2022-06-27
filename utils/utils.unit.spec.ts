import { formatPrice } from './index';

describe('formatting 유틸 함수 테스트', () => {
  it('formatPrice - 숫자 세 자리마다 콤마(,)를 붙인다', () => {
    expect(formatPrice(3000)).toEqual('3000');
  });
});
