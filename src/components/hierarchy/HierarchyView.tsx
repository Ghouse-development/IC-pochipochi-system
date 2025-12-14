import { useState } from 'react';
import { ChevronRight, ChevronDown, Package, Layers, Box, Palette, Tag } from 'lucide-react';
import type { CategoryNode } from '../../utils/csvParser';

interface HierarchyViewProps {
  data: CategoryNode[];
}

interface TreeNodeProps {
  node: CategoryNode;
  level: number;
}

function TreeNode({ node, level }: TreeNodeProps) {
  const [isExpanded, setIsExpanded] = useState(level < 2);

  const hasChildren = node.children && node.children.length > 0;

  const getIcon = () => {
    switch (node.type) {
      case 'category1':
        return <Layers className="w-4 h-4" />;
      case 'category2':
        return <Box className="w-4 h-4" />;
      case 'category3':
        return <Tag className="w-4 h-4" />;
      case 'product':
        return <Package className="w-4 h-4" />;
      case 'color':
        return <Palette className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getNodeStyle = () => {
    const baseClasses = "flex items-center space-x-2 px-2 py-1.5 hover:bg-gray-50 rounded cursor-pointer transition-colors";
    switch (node.type) {
      case 'category1':
        return `${baseClasses} font-semibold text-gray-900`;
      case 'category2':
        return `${baseClasses} font-medium text-gray-800`;
      case 'category3':
        return `${baseClasses} text-gray-700`;
      case 'product':
        return `${baseClasses} text-gray-600`;
      case 'color':
        return `${baseClasses} text-gray-500 text-sm`;
      default:
        return baseClasses;
    }
  };

  return (
    <div>
      <div
        className={getNodeStyle()}
        style={{ paddingLeft: `${level * 20}px` }}
        onClick={() => hasChildren && setIsExpanded(!isExpanded)}
      >
        {hasChildren && (
          <button className="p-0.5">
            {isExpanded ? (
              <ChevronDown className="w-3 h-3" />
            ) : (
              <ChevronRight className="w-3 h-3" />
            )}
          </button>
        )}
        {!hasChildren && <span className="w-4" />}

        {getIcon()}
        <span>{node.name}</span>

        {node.data && (
          <div className="ml-auto flex items-center space-x-4 text-xs text-gray-500">
            <span>{node.data.manufacturer}</span>
            <span>{node.data.modelNumber}</span>
            <span>{node.data.unit}</span>
            {node.data.priceLIFE > 0 && (
              <span className="font-medium">¥{node.data.priceLIFE.toLocaleString()}</span>
            )}
          </div>
        )}
      </div>

      {isExpanded && hasChildren && (
        <div>
          {node.children!.map((child) => (
            <TreeNode key={`${child.type}-${child.name}`} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function HierarchyView({ data }: HierarchyViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandAll, setExpandAll] = useState(false);

  const filterNodes = (nodes: CategoryNode[], term: string): CategoryNode[] => {
    if (!term) return nodes;

    return nodes.reduce((filtered: CategoryNode[], node) => {
      const nameMatch = node.name.toLowerCase().includes(term.toLowerCase());
      const dataMatch = node.data && (
        node.data.manufacturer.toLowerCase().includes(term.toLowerCase()) ||
        node.data.modelNumber.toLowerCase().includes(term.toLowerCase())
      );

      if (nameMatch || dataMatch) {
        filtered.push(node);
      } else if (node.children) {
        const filteredChildren = filterNodes(node.children, term);
        if (filteredChildren.length > 0) {
          filtered.push({
            ...node,
            children: filteredChildren
          });
        }
      }

      return filtered;
    }, []);
  };

  const filteredData = filterNodes(data, searchTerm);

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">部材階層構造</h2>
          <button
            onClick={() => setExpandAll(!expandAll)}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            {expandAll ? '全て折りたたむ' : '全て展開'}
          </button>
        </div>

        <input
          type="text"
          placeholder="検索..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="p-4 max-h-[600px] overflow-y-auto">
        {filteredData.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            データがありません
          </p>
        ) : (
          filteredData.map((node) => (
            <TreeNode key={`${node.type}-${node.name}`} node={node} level={0} />
          ))
        )}
      </div>
    </div>
  );
}