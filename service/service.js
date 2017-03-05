var fs = require('fs');
//��ȡ�ļ���ʱ��Ҫ���Ǽ���utf-8,��Ȼ��ȡ��������
//���������Ϣ
exports.get_search_data = function(start, end, keyword){
    //��Ϊ����http�ӿ����첽�ģ����лᵼ��get_search_data
    //���첽�ģ����ǲ���ֱ�ӷ��أ�ֱ�ӷ��ػ�������
    return function(cb){//����������Ҫ����һ���첽����ȥ������¼�
        var http = require('http');//������������
        var qs = require('querystring');//��obj����ת��Ϊhttp��ѯ����
        var data = { //���ܵĲ���
            s : keyword,
            start : start,
            end : end
        };
        var content = qs.stringify(data);//ת��Ϊ��ѯ�ַ���
        var http_request = { //ָ��Ҫ���ʵĵ�ַ
            hostname : 'dushu.xiaomi.com',
            port : 80,
            path : '/store/v0/lib/query/onebox?' + content
        };
        //������װ����Щ���������ǰ������ͳ�ȥ
        var req_obj = http.request(http_request, function(_res){ //(�����ַ���ص�(response��Ӧ����))
            var content = '';//���ص�����
            _res.setEncoding('utf8');//�趨���ص����ݸ�ʽ�޶�
            _res.on('data', function(chunk){//�����ܵ����ݵ�ʱ�򴥷�data�¼������ص�������һ��һ�ε�chunk
                content += chunk;
            });
            _res.on('end', function(){
                cb(null, content);//�����ݴ���ȥ ��һ������Ϊ�������
            });//���ݽ�����󴥷�end�¼�
        });
        req_obj.on('error', function(){});//�п�����Ӧ����
        req_obj.end();//����������ʱ����������Ļص�
    }
};
//�����ҳ��Ϣ
exports.get_index_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/home.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//������Ϣ
exports.get_rank_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/rank.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//������Ϣ
exports.get_category_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/category.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//�����Ϣ
exports.get_bookbacket_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/bookbacket.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//femel��Ϣ
exports.get_female_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/channel/female.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//male��Ϣ
exports.get_male_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/channel/male.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//book��Ϣ
exports.get_book_data = function(id){
    if(!id){
        id = "18218";
    }
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/book/' + id + '.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//��ȡ�½���Ϣchapter.json
exports.get_chapter_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/reader/chapter.json', 'utf-8', function(err, d){
            if(err){
                reject(err);
            }
            resolve(d);
        });
    })
};
//����½�����data1.json
exports.get_data_data = function(page){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/reader/data/data' + page + '.json', 'utf-8', function(err, d){
            if(err){
                reject(err);
            }
            resolve(d);
        });
    });
};