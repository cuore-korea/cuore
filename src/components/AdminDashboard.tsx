import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Mail, 
  Phone, 
  Calendar, 
  Clock, 
  User, 
  MessageSquare, 
  Filter, 
  Search,
  Eye,
  CheckCircle,
  XCircle,
  AlertCircle,
  Trash2,
  RefreshCw
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { ContactMessage, Consultation } from '../lib/supabase';

interface LoginForm {
  email: string;
  password: string;
}

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'contacts' | 'consultations'>('contacts');
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [selectedConsultation, setSelectedConsultation] = useState<Consultation | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, activeTab]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
    setLoading(false);
  };

  const handleLogin = async (data: LoginForm) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });
      
      if (error) throw error;
      setIsAuthenticated(true);
    } catch (error) {
      alert('로그인 실패: ' + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  const fetchData = async () => {
    try {
      if (activeTab === 'contacts') {
        const { data, error } = await supabase
          .from('contact_messages')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        setContacts(data || []);
      } else {
        const { data, error } = await supabase
          .from('consultations')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (error) throw error;
        setConsultations(data || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateContactStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status })
        .eq('id', id);
      
      if (error) throw error;
      fetchData();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const updateConsultationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('consultations')
        .update({ status })
        .eq('id', id);
      
      if (error) throw error;
      fetchData();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm('정말로 이 메시지를 삭제하시겠습니까?')) return;
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      fetchData();
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const deleteConsultation = async (id: string) => {
    if (!confirm('정말로 이 상담 예약을 삭제하시겠습니까?')) return;
    
    try {
      const { error } = await supabase
        .from('consultations')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      fetchData();
    } catch (error) {
      console.error('Error deleting consultation:', error);
    }
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredConsultations = consultations.filter(consultation => {
    const matchesSearch = consultation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         consultation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         consultation.service_type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || consultation.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'read':
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'replied':
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
      case 'pending':
        return <AlertCircle size={16} />;
      case 'read':
      case 'confirmed':
        return <Eye size={16} />;
      case 'replied':
      case 'completed':
        return <CheckCircle size={16} />;
      case 'cancelled':
        return <XCircle size={16} />;
      default:
        return <AlertCircle size={16} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">관리자 로그인</h1>
          
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
              <input
                type="email"
                {...register('email', { required: '이메일을 입력해주세요' })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                placeholder="admin@cuore-beauty.co.kr"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
              <input
                type="password"
                {...register('password', { required: '비밀번호를 입력해주세요' })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-rose-600 text-white py-3 rounded-xl hover:bg-rose-700 transition-colors duration-200 font-medium disabled:opacity-50"
            >
              {loading ? '로그인 중...' : '로그인'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-semibold text-gray-900">CUORE 관리자</h1>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-8">
          <button
            onClick={() => setActiveTab('contacts')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
              activeTab === 'contacts'
                ? 'bg-white text-rose-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <MessageSquare size={20} className="inline mr-2" />
            문의 메시지 ({contacts.length})
          </button>
          <button
            onClick={() => setActiveTab('consultations')}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
              activeTab === 'consultations'
                ? 'bg-white text-rose-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Calendar size={20} className="inline mr-2" />
            상담 예약 ({consultations.length})
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="이름, 이메일, 메시지로 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 rounded-xl border border-gray-200 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
              >
                <option value="all">모든 상태</option>
                {activeTab === 'contacts' ? (
                  <>
                    <option value="new">새 메시지</option>
                    <option value="read">읽음</option>
                    <option value="replied">답변 완료</option>
                  </>
                ) : (
                  <>
                    <option value="pending">대기중</option>
                    <option value="confirmed">확정</option>
                    <option value="completed">완료</option>
                    <option value="cancelled">취소</option>
                  </>
                )}
              </select>
              <button
                onClick={fetchData}
                className="px-4 py-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-200"
              >
                <RefreshCw size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'contacts' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact List */}
            <div className="lg:col-span-2 space-y-4">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`bg-white rounded-xl shadow-sm p-6 cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedMessage?.id === contact.id ? 'ring-2 ring-rose-500' : ''
                  }`}
                  onClick={() => setSelectedMessage(contact)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                        <User size={20} className="text-rose-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                        <p className="text-sm text-gray-600">{contact.email}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(contact.status)}`}>
                      {getStatusIcon(contact.status)}
                      {contact.status === 'new' ? '새 메시지' : 
                       contact.status === 'read' ? '읽음' : '답변 완료'}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3 line-clamp-2">{contact.message}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(contact.created_at).toLocaleDateString('ko-KR')}</span>
                    {contact.service_interest && (
                      <span className="bg-gray-100 px-2 py-1 rounded-full">{contact.service_interest}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Detail */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              {selectedMessage ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">메시지 상세</h3>
                    <button
                      onClick={() => deleteContact(selectedMessage.id)}
                      className="text-red-600 hover:text-red-700 transition-colors duration-200"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700">이름</label>
                      <p className="text-gray-900">{selectedMessage.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">이메일</label>
                      <p className="text-gray-900">{selectedMessage.email}</p>
                    </div>
                    {selectedMessage.phone && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">전화번호</label>
                        <p className="text-gray-900">{selectedMessage.phone}</p>
                      </div>
                    )}
                    {selectedMessage.service_interest && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">관심 서비스</label>
                        <p className="text-gray-900">{selectedMessage.service_interest}</p>
                      </div>
                    )}
                    <div>
                      <label className="text-sm font-medium text-gray-700">메시지</label>
                      <p className="text-gray-900 whitespace-pre-wrap">{selectedMessage.message}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">접수일</label>
                      <p className="text-gray-900">{new Date(selectedMessage.created_at).toLocaleString('ko-KR')}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">상태 변경</label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => updateContactStatus(selectedMessage.id, 'read')}
                        className="flex-1 py-2 px-3 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors duration-200 text-sm"
                      >
                        읽음
                      </button>
                      <button
                        onClick={() => updateContactStatus(selectedMessage.id, 'replied')}
                        className="flex-1 py-2 px-3 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors duration-200 text-sm"
                      >
                        답변 완료
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <MessageSquare size={48} className="mx-auto mb-4 text-gray-300" />
                  <p>메시지를 선택해주세요</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Consultation List */}
            <div className="lg:col-span-2 space-y-4">
              {filteredConsultations.map((consultation) => (
                <div
                  key={consultation.id}
                  className={`bg-white rounded-xl shadow-sm p-6 cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedConsultation?.id === consultation.id ? 'ring-2 ring-rose-500' : ''
                  }`}
                  onClick={() => setSelectedConsultation(consultation)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
                        <Calendar size={20} className="text-rose-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{consultation.name}</h3>
                        <p className="text-sm text-gray-600">{consultation.email}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(consultation.status)}`}>
                      {getStatusIcon(consultation.status)}
                      {consultation.status === 'pending' ? '대기중' : 
                       consultation.status === 'confirmed' ? '확정' : 
                       consultation.status === 'completed' ? '완료' : '취소'}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={16} />
                      {consultation.preferred_date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock size={16} />
                      {consultation.preferred_time}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                    {consultation.service_type}
                  </p>
                </div>
              ))}
            </div>

            {/* Consultation Detail */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              {selectedConsultation ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">상담 예약 상세</h3>
                    <button
                      onClick={() => deleteConsultation(selectedConsultation.id)}
                      className="text-red-600 hover:text-red-700 transition-colors duration-200"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700">이름</label>
                      <p className="text-gray-900">{selectedConsultation.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">전화번호</label>
                      <p className="text-gray-900">{selectedConsultation.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">이메일</label>
                      <p className="text-gray-900">{selectedConsultation.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">서비스 유형</label>
                      <p className="text-gray-900">{selectedConsultation.service_type}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">희망 날짜</label>
                      <p className="text-gray-900">{selectedConsultation.preferred_date}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">희망 시간</label>
                      <p className="text-gray-900">{selectedConsultation.preferred_time}</p>
                    </div>
                    {selectedConsultation.message && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">추가 메시지</label>
                        <p className="text-gray-900 whitespace-pre-wrap">{selectedConsultation.message}</p>
                      </div>
                    )}
                    <div>
                      <label className="text-sm font-medium text-gray-700">예약일</label>
                      <p className="text-gray-900">{new Date(selectedConsultation.created_at).toLocaleString('ko-KR')}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">상태 변경</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => updateConsultationStatus(selectedConsultation.id, 'confirmed')}
                        className="py-2 px-3 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors duration-200 text-sm"
                      >
                        확정
                      </button>
                      <button
                        onClick={() => updateConsultationStatus(selectedConsultation.id, 'completed')}
                        className="py-2 px-3 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors duration-200 text-sm"
                      >
                        완료
                      </button>
                      <button
                        onClick={() => updateConsultationStatus(selectedConsultation.id, 'cancelled')}
                        className="py-2 px-3 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition-colors duration-200 text-sm col-span-2"
                      >
                        취소
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500">
                  <Calendar size={48} className="mx-auto mb-4 text-gray-300" />
                  <p>상담 예약을 선택해주세요</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;