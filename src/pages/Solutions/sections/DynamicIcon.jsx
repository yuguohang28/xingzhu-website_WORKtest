// === Dynamic Icon Lookup ===

import {
  Search,
  BarChart3,
  ShieldCheck,
  Route,
  TrendingUp,
  UserCheck,
  FileText,
  RefreshCw,
  Layers,
  Eye,
  FileSearch,
  CheckCircle,
  LineChart,
  PieChart,
  LayoutDashboard,
  AlertTriangle,
  Globe,
  Camera,
} from 'lucide-react'

const iconMap = {
  Search,
  BarChart3,
  ShieldCheck,
  Route,
  TrendingUp,
  UserCheck,
  FileText,
  RefreshCw,
  Layers,
  Eye,
  FileSearch,
  CheckCircle,
  LineChart,
  PieChart,
  LayoutDashboard,
  AlertTriangle,
  Globe,
  Camera,
}

export default function DynamicIcon({ name, className = 'w-4 h-4' }) {
  const Icon = iconMap[name]
  return Icon ? <Icon className={className} /> : null
}
