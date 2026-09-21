import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('marketplace');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💪</span>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
              PT Marketplace
            </h1>
          </div>

          <nav className="flex gap-2">
            <button
              onClick={() => setActiveTab('marketplace')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'marketplace'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Tìm PT
            </button>
            <button
              onClick={() => setActiveTab('workout')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'workout'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Lịch Tập
            </button>
            <button
              onClick={() => setActiveTab('trainer')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeTab === 'trainer'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Giao diện PT
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2.5 py-1 rounded-full border border-amber-200 flex items-center gap-1">
              🪙 120 Xu
            </span>
            <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm border border-indigo-200">
              U
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'marketplace' && <MarketplaceView />}
        {activeTab === 'workout' && <WorkoutTrackerView />}
        {activeTab === 'trainer' && <TrainerDashboardView />}
      </main>
    </div>
  );
}

// Sub-component: Trang Tìm kiếm PT
function MarketplaceView() {
  const trainers = [
    { id: 1, name: 'Nguyễn Văn A', rating: 4.9, reviews: 38, rate: '350.000đ/buổi', tag: 'Tăng cơ' },
    { id: 2, name: 'Trần Thị B', rating: 4.8, reviews: 25, rate: '300.000đ/buổi', tag: 'Giảm mỡ' },
    { id: 3, name: 'Lê Hoàng C', rating: 5.0, reviews: 12, rate: '400.000đ/buổi', tag: 'PT Mới' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Huấn Luyện Viên Nổi Bật</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trainers.map((pt) => (
          <div key={pt.id} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-lg font-bold text-slate-600">
                {pt.name[0]}
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">{pt.name}</h3>
                <p className="text-xs text-indigo-600 font-medium">{pt.tag}</p>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm border-t border-slate-100 pt-3 mt-2">
              <span className="text-amber-500 font-semibold">★ {pt.rating} ({pt.reviews})</span>
              <span className="font-bold text-slate-900">{pt.rate}</span>
            </div>
            <button className="w-full mt-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-medium py-2 rounded-lg text-sm transition">
              Xem Hồ Sơ & Đặt Lịch
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Sub-component: Trang Lịch tập của Học viên
function WorkoutTrackerView() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Lịch Tập Tuần Này</h2>
      <p className="text-sm text-slate-500 mb-6">Điểm danh tự động mỗi ngày lúc 23:59 nếu không có báo cáo sự cố.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
        {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day, idx) => (
          <div key={idx} className="border border-slate-200 rounded-lg p-3 bg-slate-50">
            <span className="font-bold text-xs text-slate-400">{day}</span>
            <div className="mt-2 text-xs bg-emerald-100 text-emerald-800 p-2 rounded border border-emerald-200 font-medium">
              ✓ Hoàn thành
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Sub-component: Trang Quản lý cho PT
function TrainerDashboardView() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Công Cụ Tạo Lộ Trình Tập</h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm">
          📋 Clone Lịch Tuần Trước
        </button>
      </div>
      <p className="text-slate-500 text-sm">Thiết lập bài tập chi tiết cho học viên theo từng tuần.</p>
    </div>
  );
}