import { OsmApiWay, OsmNode, OsmWay, Types } from '../src';
import { parseOsmWayApi } from '../src/util/util';

const osmApiWay: OsmApiWay = {
  type: Types.WAY,
  id: 1,
  timestamp: '2019-02-14T07:33:10Z',
  version: 1,
  changeset: 1,
  user: 'userName',
  nodes: [1, 2, 3, 4, 5],
};
const osmNodes = osmApiWay.nodes.map((nodeId) => {
  const osmNode: OsmNode = {
    type: Types.NODE,
    id: nodeId,
    lat: 35,
    lon: 36,
  };
  return osmNode;
});

describe('util', function () {
  describe('#parseOsmWayApi', function () {
    it('should parse an array of OsmWayApi and OsmNodes to one OsmWay object', function () {
      const elements = [...osmNodes, osmApiWay];
      const expectedOsmWay = { ...osmApiWay, nodes: osmNodes };
      const result = parseOsmWayApi(elements);
      expect(result).toEqual<OsmWay>(expectedOsmWay);
      expect(result?.nodes.length).toBe(osmNodes.length);
    });

    it('should fail when the array is empty', function () {
      const elements: (OsmApiWay | OsmNode)[] = [];
      const result = parseOsmWayApi(elements);
      expect(result).toBeUndefined();
    });

    it('should fail when the array has no osmApiWay', function () {
      const elements: (OsmApiWay | OsmNode)[] = [...osmNodes];
      const result = parseOsmWayApi(elements);
      expect(result).toBeUndefined();
    });

    it('should fail when the array has no nodes', function () {
      const elements: (OsmApiWay | OsmNode)[] = [osmApiWay];
      const result = parseOsmWayApi(elements);
      expect(result).toBeUndefined();
    });
  });
});
